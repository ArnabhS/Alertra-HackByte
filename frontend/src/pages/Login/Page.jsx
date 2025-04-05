import { useState } from "react";
import { sendOTP, verifyOTP } from "../../services/authService.js";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleRequestOtp = async () => {
    try {
      await sendOTP(phone);
      setOtpSent(true);
    } catch (error) {
      console.error("Error requesting OTP:", error.response?.data || error.message);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      await verifyOTP(phone, otp);
      navigate("/");
    } catch (error) {
      console.error("Error verifying OTP:", error.response?.data || error.message);
    }
  };

  return (
    <motion.div
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-pink-100 to-white"
        initial={{ scale: 1.2, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute top-1/4 left-1/3 w-20 h-20 bg-pink-300 rounded-full opacity-40"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-pink-400 rounded-full opacity-40"
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="relative bg-white p-8 rounded-2xl shadow-lg w-96 z-10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-semibold text-pink-600 text-center">Login</h2>
        <p className="text-gray-500 text-center">Please login to your account</p>
        {!otpSent ? (
          <>
            <input
              type="tel"
              placeholder="Enter your Phone Number"
              className="w-full px-4 py-2 mt-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              onChange={(e) => setPhone(e.target.value)}
            />
            <motion.button
              className="w-full mt-6 bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
              onClick={handleRequestOtp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request OTP
            </motion.button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full px-4 py-2 mt-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              onChange={(e) => setOtp(e.target.value)}
            />
            <motion.button
              className="w-full mt-6 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
              onClick={handleVerifyOtp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Verify OTP
            </motion.button>
          </>
        )}
        <p className="text-gray-600 text-center mt-4">
          Don't have an account? <a href="/register" className="text-pink-500">Sign up</a>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Login;
