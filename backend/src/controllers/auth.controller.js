const User = require('../models/user.model.js');



const register = async(req,res)=>{
    const { name,phoneNumber,role, raspberryUID } = req.body;
    
    try {
        if (!["user", "security"].includes(role)) {
            return res.status(400).json({ message: "Invalid role" });
        }
        const userExists = await User.findOne({phoneNumber});
        
        if(userExists){
            return res.status(401).json({ message:"User already registered. Please log in" })
        } 
        const newUser = await User.create({
            name,
            phoneNumber,
            role,
            raspberryUID
        });

        return res.status(201).json({ message: "User registered successfully", user: newUser });

    } catch (error) {
        return res.status(500).json({ message: "Error signing up", error: error.message });
    }
}

module.exports = { register }