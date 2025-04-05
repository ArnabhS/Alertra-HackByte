
const axios = require('axios');

const sendOTP = async (mobileNumber, otp) => {
  try {
    const authKey = process.env.ROCK2CONNECT_API_KEY;
    const sender = process.env.ROCK2CONNECT_SENDER_ID;
    const baseUrl =process.env.ROCK2CONNECT_API_URL;
    const t_id= process.env.ROCK2CONNECT_T_ID;

   
    const smsText = `Dear Customer , your Registration OTP is ${otp}  -Support Team RisiEdu`;

    
    const url = `${baseUrl}?type=smsquicksend&authKey=${authKey}&sender=${sender}&to_mobileno=${mobileNumber}&sms_text=${encodeURIComponent(smsText)}&t_id=${t_id}`;

    
    const response = await axios.get(url);

    // console.log('OTP sent successfully:', response.data);
    return response.data; 
  } catch (error) {
    console.error('Error sending OTP:', error.message);
    throw new Error('Failed to send OTP');
  }
};


module.exports = sendOTP;
