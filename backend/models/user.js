const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstname : {
        type : String,
        required : true,
        lowercase : true,
    },
    lastname : {
        type : String,
        required : true,
        lowercase : true, 
    },
    mobileno : {
        type : String,
        required : true,
        minlength : 10,
        maxlength : 10,
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        validate: [ isEmail , 'Please enter a valid email']
    },
    username : {
        type : String,
        required : true,
        minlength : 5,
        unique : true,
        lowercase : true
    },
    dob : {
        type : Date,
        required : true,
    },
    gender : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
        minlength : 6
    },
    role : {
        type : String,
        enum : ['shopkeeper', 'admin', 'beneficiary'],
        default : 'beneficiary'
    },
    aadhaarId: {
        type: String,
        sparse: true, // Allow null since admin/shopkeeper might not need it
        unique: true
    },
    rationCardType: {
        type: String,
        enum: ['APL', 'BPL', 'Antyodaya', ''],
        default: ''
    },
    assignedShop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'shop'
    },
    familyMembersCount: {
        type: Number,
        default: 1
    },
    shopId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'shop' // Assigned to shopkeeper representing their owned shop
    }
}, { timestamps: true });

//fire a function after a new user saved in db
userSchema.pre('save',async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();
})

//static method to login
userSchema.statics.login = async function(email, password ){
    const user = await this.findOne({email : email});
    if(user){
       const auth = await bcrypt.compare(password , user.password);
       if(auth){
           return user;
       }throw Error('incorrect password');
    }throw Error('incorrect email')
}

const User = mongoose.model('user', userSchema);

module.exports = User;