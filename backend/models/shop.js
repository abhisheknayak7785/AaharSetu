const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    shopName: {
        type: String,
        required: true,
        trim: true
    },
    dealerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    address: {
        type: String,
        required: true
    },
    stock: {
        rice: { type: Number, default: 0 }, // measured in kg
        wheat: { type: Number, default: 0 },
        sugar: { type: Number, default: 0 },
        kerosene: { type: Number, default: 0 } // measured in liters
    }
}, { timestamps: true });

const Shop = mongoose.model('shop', shopSchema);
module.exports = Shop;
