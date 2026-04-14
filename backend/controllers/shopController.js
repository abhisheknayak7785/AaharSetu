const User = require('../models/user');
const Shop = require('../models/shop');
const Transaction = require('../models/transaction');

exports.initializeShop = async (req, res) => {
    try {
        const { shopName, address } = req.body;
        let shop = await Shop.findOne({ dealerId: req.user.id });
        if (shop) return res.status(400).json({ error: "Shop already initialized" });

        shop = await Shop.create({ shopName, address, dealerId: req.user.id });
        await User.findByIdAndUpdate(req.user.id, { shopId: shop._id });
        res.status(201).json(shop);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getMyShop = async (req, res) => {
    try {
        const shop = await Shop.findOne({ dealerId: req.user.id });
        if (!shop) return res.status(404).json({ error: "Shop not found" });
        res.json(shop);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateStock = async (req, res) => {
    try {
        const { rice, wheat, sugar, kerosene } = req.body;
        const shop = await Shop.findOne({ dealerId: req.user.id });
        if (!shop) return res.status(404).json({ error: "Shop not found" });

        shop.stock.rice += rice || 0;
        shop.stock.wheat += wheat || 0;
        shop.stock.sugar += sugar || 0;
        shop.stock.kerosene += kerosene || 0;

        await shop.save();
        res.json(shop);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.distributeRation = async (req, res) => {
    try {
        const { beneficiaryId, itemsDistributed } = req.body;
        
        // 1. Validate beneficiary
        const beneficiary = await User.findOne({ _id: beneficiaryId, role: 'beneficiary' });
        if (!beneficiary) return res.status(404).json({ error: "Beneficiary not found" });
        
        // 2. Validate shop
        const shop = await Shop.findOne({ dealerId: req.user.id });
        if (!shop) return res.status(404).json({ error: "Shop not found" });
        
        // 3. Ensure beneficiary is assigned to this shop (or allow if global, but normally assigned)
        if (beneficiary.assignedShop && beneficiary.assignedShop.toString() !== shop._id.toString()) {
             return res.status(400).json({ error: "Beneficiary not assigned to this shop" });
        }

        // 4. Deduct stock
        if (shop.stock.rice < (itemsDistributed.rice || 0) ||
            shop.stock.wheat < (itemsDistributed.wheat || 0) ||
            shop.stock.sugar < (itemsDistributed.sugar || 0) ||
            shop.stock.kerosene < (itemsDistributed.kerosene || 0)) {
            return res.status(400).json({ error: "Insufficient stock in shop" });
        }

        shop.stock.rice -= itemsDistributed.rice || 0;
        shop.stock.wheat -= itemsDistributed.wheat || 0;
        shop.stock.sugar -= itemsDistributed.sugar || 0;
        shop.stock.kerosene -= itemsDistributed.kerosene || 0;
        await shop.save();

        // 5. Log Transaction
        const transaction = await Transaction.create({
            beneficiaryId: beneficiary._id,
            shopId: shop._id,
            itemsDistributed
        });

        res.status(201).json(transaction);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAssignedBeneficiaries = async (req, res) => {
    try {
        const shop = await Shop.findOne({ dealerId: req.user.id });
        if (!shop) return res.status(404).json({ error: "Shop not found" });

        const beneficiaries = await User.find({ assignedShop: shop._id, role: 'beneficiary' })
                                        .select('-password');
        res.json(beneficiaries);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
