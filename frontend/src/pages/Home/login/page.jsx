import { useState } from "react";
import { sendOTP, verifyOTP } from "../../services/authService.js";
import { useNavigate } from "react-router-dom";

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
      navigate('/')
    } catch (error) {
      console.error("Error verifying OTP:", error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold">Login</h2>
        {!otpSent ? (
          <>
            <input
              type="tel"
              placeholder="Phone Number"
              className="border p-2 w-full mt-2"
              onChange={(e) => setPhone(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white p-2 mt-4 w-full"
              onClick={handleRequestOtp}
            >
              Request OTP
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              className="border p-2 w-full mt-2"
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              className="bg-green-500 text-white p-2 mt-4 w-full"
              onClick={handleVerifyOtp}
            >
              Verify OTP
            </button>
          </>
        )}
        <a href="/register">
          <p className="text-sm mt-2 cursor-pointer text-blue-600">
            Need an account? Register
          </p>
        </a>
      </div>
    </div>
  );
};

export default Login;
