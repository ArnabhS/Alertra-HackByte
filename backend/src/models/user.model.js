const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name: String,
    phoneNumber:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    role: { 
        type: String, 
        enum: ['user', 'security'] 
    },
    otp: { 
        type: String, 
        required: false 
    },
    isVerified: { 
        type: Boolean, 
        default: false 
    },
    raspberryUID:{
        type:String,
    },
    emergencyContacts: {
        type: [String], 
        validate: [arr => arr.length <= 3, 'Max 3 emergency contacts allowed']
    },
    fcmToken: String
});


module.exports = mongoose.model('User', UserSchema);