
const axios = require('axios');

const sendOTP = async (mobileNumber, otp) => {
  try {
    const authKey = "ZZDUHerBhwYQ0f3z9kRI";
    const sender = "RSTEdu";
    const baseUrl ="http://login5.spearuc.com/MOBILE_APPS_API/sms_api.php";
    const t_id= "1707173623405426000";

   
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
