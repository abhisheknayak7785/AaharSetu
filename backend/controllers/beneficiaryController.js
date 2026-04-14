const User = require('../models/user');
const Shop = require('../models/shop');
const Transaction = require('../models/transaction');
const Complaint = require('../models/complaint');

const QUOTAS = {
    'APL': { rice: 10, wheat: 15, sugar: 2, kerosene: 0 },
    'BPL': { rice: 25, wheat: 20, sugar: 5, kerosene: 5 },
    'Antyodaya': { rice: 35, wheat: 25, sugar: 10, kerosene: 10 }
};

exports.getEligibility = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user || user.role !== 'beneficiary') {
            return res.status(404).json({ error: "Beneficiary not found" });
        }
        
        let quota = QUOTAS[user.rationCardType] || { rice: 0, wheat: 0, sugar: 0, kerosene: 0 };
        // Apply multiplier based on family members
        const multipliers = {
            rice: quota.rice * user.familyMembersCount,
            wheat: quota.wheat * user.familyMembersCount,
            sugar: quota.sugar * user.familyMembersCount,
            kerosene: quota.kerosene // Kerosene might be per family not per member
        };

        // Determine collected amount this month
        const startOfMonth = new Date();
        startOfMonth.setDate(1);
        startOfMonth.setHours(0,0,0,0);
        
        const transactions = await Transaction.find({
            beneficiaryId: user._id,
            date: { $gte: startOfMonth }
        });

        const collected = { rice: 0, wheat: 0, sugar: 0, kerosene: 0 };
        transactions.forEach(t => {
            collected.rice += t.itemsDistributed.rice || 0;
            collected.wheat += t.itemsDistributed.wheat || 0;
            collected.sugar += t.itemsDistributed.sugar || 0;
            collected.kerosene += t.itemsDistributed.kerosene || 0;
        });

        res.json({
            rationCardType: user.rationCardType,
            familyMembersCount: user.familyMembersCount,
            totalQuota: multipliers,
            collectedThisMonth: collected
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getShopStock = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('assignedShop');
        if (!user || !user.assignedShop) {
            return res.status(404).json({ error: "No shop assigned" });
        }
        res.json(user.assignedShop);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({ beneficiaryId: req.user.id })
            .populate('shopId', 'shopName address')
            .sort('-date');
        res.json(transactions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.postComplaint = async (req, res) => {
    try {
        const { subject, description } = req.body;
        const complaint = await Complaint.create({
            userId: req.user.id,
            subject,
            description
        });
        res.status(201).json(complaint);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
