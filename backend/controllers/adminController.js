const User = require('../models/user');
const Shop = require('../models/shop');
const Transaction = require('../models/transaction');
const Complaint = require('../models/complaint');

exports.getAllShops = async (req, res) => {
    try {
        const shops = await Shop.find().populate('dealerId', 'firstname lastname email mobileno');
        res.json(shops);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Allow admin to manually create a shop
exports.createShop = async (req, res) => {
    try {
        const { shopName, address, dealerId } = req.body;
        const shop = await Shop.create({ shopName, address, dealerId });
        await User.findByIdAndUpdate(dealerId, { shopId: shop._id });
        res.status(201).json(shop);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.getAnalytics = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        const totalShops = await Shop.countDocuments();
        const totalTransactions = await Transaction.countDocuments();
        
        const recentTransactions = await Transaction.find().sort('-date').limit(10)
                                    .populate('beneficiaryId', 'firstname lastname aadhaarId')
                                    .populate('shopId', 'shopName');

        res.json({
            counts: { totalUsers, totalShops, totalTransactions },
            recentTransactions
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getComplaints = async (req, res) => {
    try {
        const complaints = await Complaint.find().populate('userId', 'firstname lastname email role').sort('-createdAt');
        res.json(complaints);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateComplaint = async (req, res) => {
    try {
        const { status } = req.body;
        const complaint = await Complaint.findByIdAndUpdate(req.params.id, { status }, { new: true });
        res.json(complaint);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
