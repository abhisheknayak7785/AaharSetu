const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    beneficiaryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    shopId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'shop',
        required: true
    },
    itemsDistributed: {
        rice: { type: Number, default: 0 },
        wheat: { type: Number, default: 0 },
        sugar: { type: Number, default: 0 },
        kerosene: { type: Number, default: 0 }
    },
    date: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

const Transaction = mongoose.model('transaction', transactionSchema);
module.exports = Transaction;
