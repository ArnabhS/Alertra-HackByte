const admin = require('../config/firebase.js');

const sendPushNotification = async (token, title, message) => {
    
    await admin.messaging().send({ notification: { title, body: message }, token });
};

module.exports = sendPushNotification;