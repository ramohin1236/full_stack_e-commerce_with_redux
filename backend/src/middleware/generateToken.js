const userr = require("../users/user.model");
const jwt = require('jsonwebtoken');

const JWT_SECRET_KEY = process.env.JWT_SECRET;

const generateToken = async(userId)=>{
    try{
         const user = await userr.findById(userId);
         if(!user){
             throw new Error("User not found");
         }
         const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET_KEY, { expiresIn: "1h" });
         console.log(token)
         return token;
    }catch(err){
        console.log("Token generation error:", err.message);
        throw err
    }
 
}


module.exports = generateToken;