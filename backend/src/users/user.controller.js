const UserModel = require("./user.model");


// user registration
const userRegistration = async(req, res)=>{
    
    try{
        
        const {userName, email, password} = req.body;
        const user = new  UserModel({userName, email, password});
        const result= await user.save();
        res.status(201).json(result)
        res.status(201).json({ message: 'User registered successfully' })
    }catch(err){
        console.log("User registration error:",err.message)
        res.status(500).json({ message: err.message })
    }
}


module.exports = { 
    userRegistration 
}
