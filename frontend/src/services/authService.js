import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const sendOTP = async (phoneNumber) => {
  const res = await axios.post(`${API_URL}/api/v1/auth/send-otp`, { phoneNumber });
  return res.data;
};

export const verifyOTP = async (phoneNumber, otp) => {
    const res = await axios.post(`${API_URL}/api/v1/auth/verify-otp`, { phoneNumber,otp });
    console.log(res.data)
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("userId",res.data.user._id)
    return res.data;
  };

export const registerUser = async (userData) => {
  return await axios.post(`${API_URL}/api/v1/auth/register`, userData);
};

export const getAuthToken = () => {
  const token = localStorage.getItem("token");
  return token ;
};
export const getUserRole = () => {
  const token = localStorage.getItem("token");
  return token ? JSON.parse(atob(token.split(".")[1])).role : null;
};
