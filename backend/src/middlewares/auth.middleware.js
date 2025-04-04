
const jwt = require("jsonwebtoken");
const User = require("../models/user.model.js");

const authMiddleware = async (req, res, next) => {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];
        // console.log(token)
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        req.user = await User.findById(decoded.userId).select("-password");
        // console.log(req.user)
        next();
      } catch (error) {
        console.error(error);
        return res.status(401).json({message:"Not authorized, token failed"})
  
      }
    }
    if (!token) {
      return res.status(401).json({message:"Not authorized, token failed"})
    }
  };


const roleMiddleware = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "You are not allowed to perform this action" });
    }
    
    next();
  };
};

module.exports = { authMiddleware, roleMiddleware }