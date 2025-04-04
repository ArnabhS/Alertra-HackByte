const express = require("express");
const { register, sendOtpForLogin, verifyOtp, getUser, updateFCMToken } = require('../controllers/auth.controller.js');
const { authMiddleware } = require('../middlewares/auth.middleware.js')

const router = express.Router();

router.post("/register", register);
router.post("/send-otp", sendOtpForLogin);
router.post("/verify-otp", verifyOtp);
router.post("/update-fcm-token", updateFCMToken);
router.get("/profile",authMiddleware, getUser);

module.exports = router;