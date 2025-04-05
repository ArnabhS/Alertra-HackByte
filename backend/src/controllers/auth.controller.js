const User = require('../models/user.model.js');
const generateOTP = require('../utils/generateOTP.js')
const generateToken = require('../utils/generateToken.js')
const sendOTP = require('../services/sendOTP.js')
const crypto = require('crypto');

const register = async (req, res) => {
    console.log(req.body);
    const { name, phoneNumber, role } = req.body;

    try {
        if (!["user", "security"].includes(role)) {
            return res.status(400).json({ message: "Invalid role" });
        }

        const userExists = await User.findOne({ phoneNumber });

        if (userExists) {
            return res.status(401).json({ message: "User already registered. Please log in" });
        }

        // Generate a unique Raspberry UID
        const raspberryUID = crypto.randomBytes(16).toString('hex'); // 32-char string

        const newUser = await User.create({
            name,
            phoneNumber,
            role,
            raspberryUID
        });

        return res.status(201).json({ message: "User registered successfully", user: newUser });

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Error signing up", error: error.message });
    }
};

const sendOtpForLogin = async (req,res)=>{
    try {
        const { phoneNumber } = req.body;
        if (!phoneNumber)
            return res.status(400).json({ message: "Phone number is required" });
      
        const user = await User.findOne({ phoneNumber });

        if (!user) return res.status(404).json({ message: "User not found" });

        const otp = generateOTP();
        console.log(otp, "OTP");
        user.otp = otp;
        await user.save();
        await sendOTP(phoneNumber, otp)
        return res.status(200).json({ message: "OTP sent successfully" });
    } catch (error) {
        return res
        .status(500)
        .json({ message: "Failed to send OTP", error: error.message });
    }
}

const getUser = async(req,res)=>{
    try {
        const { id } = req.user;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({ user:user });
    } catch (error) {
        return res
            .status(500)
            .json({ message: "Error fetching user", error: error.message });
    }
}

const verifyOtp = async (req,res)=>{
    const { phoneNumber, otp } = req.body;
  
    if (!phoneNumber || !otp)
      return res
        .status(400)
        .json({ message: "Phone Number and OTP are required" });
    try {
      const user = await User.findOne({ phoneNumber });
      if (!user) return res.status(404).json({ message: "User not found" });
  
      if (user.otp === otp) {
        user.isVerified = true;
        user.otp = null;
        await user.save();
  
        const token = generateToken(user._id, user.role);
  
        return res.status(200).json({ message: "Login successful", token, user });
      } else {
        return res.status(400).json({ message: "Invalid OTP" });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error verifying OTP", error: error.message });
    }
}

const updateFCMToken = async (req,res)=>{
    try {
        const { userId, fcmToken } = req.body;

        if (!userId || !fcmToken) {
            return res.status(400).json({ error: "User ID and FCM token are required" });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        user.fcmToken = fcmToken; 
        await user.save();

        return res.json({ success: true, message: "FCM token updated successfully" });
    } catch (error) {
        console.error("Error updating FCM token:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}


const addEmergencyContacts = async (req,res)=>{
    try {
        const { phoneNumber, emergencyContact } = req.body;
        if (!phoneNumber || !emergencyContact || !emergencyContact.name || !emergencyContact.phoneNumber) {
            return res.status(400).json({ message: "Phone number, emergency contact name, and phone number are required." });
        }
        let user = await User.findOne({ phoneNumber });

        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }
        if (user.emergencyContacts.some(contact => contact.phoneNumber === emergencyContact.phoneNumber)) {
            return res.status(400).json({ message: "Contact already added." });
        }

        // Ensure max limit of 3 contacts
        if (user.emergencyContacts.length >= 5) {
            return res.status(400).json({ message: "Maximum 5 emergency contacts allowed." });
        }

        // Add the new emergency contact
        user.emergencyContacts.push(emergencyContact);
        await user.save();

        return res.status(200).json({ message: "Emergency contact added successfully.", user });
    } catch (error) {
        
    }
}

module.exports = { register, sendOtpForLogin, verifyOtp, getUser, updateFCMToken, addEmergencyContacts }