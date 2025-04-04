const twilio = require('twilio');
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
const User = require('../models/user.model.js');
const admin = require('../config/firebase.js')

const makeCall = async (userId, latitude, longitude, floor_number) => {
    try {
        const locationLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
        const message = `<Response><Say>Emergency Alert! Report immediately to the location. </Say></Response>`;

        const user = await User.findById(userId);
        const emergencyContacts = user?.emergencyContacts || [];

        const securityOfficials = await User.find({ role: 'security' }, 'phoneNumber fcmToken');
        const securityNumbers = securityOfficials.map((official) => official.phoneNumber);
        console.log(securityNumbers)
        const securityFcmTokens = securityOfficials.map((official) => official.fcmToken).filter(Boolean);
        console.log(securityFcmTokens)
        const allRecipients = [...new Set([...securityNumbers, ...emergencyContacts])];

        for (const number of allRecipients) {
            await client.calls.create({
                twiml: message,
                to: number,
                from: process.env.TWILIO_PHONE_NUMBER
            });

            await client.messages.create({
                body: `Emergency Alert! Here is the location: ${locationLink}. Floor Number:${floor_number}`,
                to: number,
                from: process.env.TWILIO_PHONE_NUMBER
            });
    }
    if (securityFcmTokens.length > 0) {
      
        const message = {
            tokens: securityFcmTokens, // Array of FCM tokens
            notification: {
                title: "🚨 Emergency Alert!",
                body: `An emergency has been reported. Check the location: ${locationLink}. Floor Number:${floor_number}`,
                // click_action: 'FLUTTER_NOTIFICATION_CLICK',
            },
        };
        
        admin.messaging().sendEachForMulticast(message)
            .then((response) => {
                console.log(`✅ Sent: ${response.successCount}, Failed: ${response.failureCount}`);
            })
            .catch((error) => {
                console.error("❌ Error sending multicast notification:", error);
            });

        console.log('Emergency push notifications sent to security officials.');
    }
    }   catch (error) {
        console.error('Error sending emergency alerts:', error);
    }
}

module.exports = makeCall;