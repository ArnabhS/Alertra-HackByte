const Alert = require('../models/alert.model.js')
const User = require('../models/user.model.js')
const crypto = require("crypto");
const sendPushNotification = require('../utils/firebaseUtils.js')
const makeCall = require('../services/twilioServices.js')


const triggerSOS = async (req,res)=>{
   console.log(req.body)
    const { raspberryUID, latitude, longitude, floor_number } = req.body;

    if(!raspberryUID){
        return res.status(404).json({message:"Raspberry UID missing"})
    }    
    
    try {
        const user = await User.findOne({raspberryUID});
        if(!user){
            return res.status(404).json({message:"User not found"})
        }
        const userId = user._id;
        const alert = new Alert({ userId, location: { latitude, longitude } });
        await alert.save();

       await makeCall(userId,latitude,longitude, floor_number)
       
       return res.status(201).json({ message: "SOS alert sent",  });
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ error: "Error triggering SOS" });
    }
}


module.exports  = { triggerSOS }