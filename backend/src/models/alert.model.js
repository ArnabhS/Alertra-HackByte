const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    location: { 
        latitude: Number, 
        longitude: Number 
    },
    floorNumber:{
        type:Number
    },
    status: { 
        type: String, 
        default: "pending" 
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Alert', AlertSchema);
