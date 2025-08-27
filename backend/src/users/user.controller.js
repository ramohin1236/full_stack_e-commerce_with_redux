const userretr = require("./user.model");


// user registration
const userRegistration = async(req, res)=>{
    
    try{
        
        const {userName, email, password} = req.body;
        const user = new  userretr({userName, email, password});
        const result= await user.save();
        res.status(201).json(result)
        // await user.save();
        // res.send('User registered successfully')
    }catch(err){
        console.log("User registration error:",err.message)
        res.status(500).json({ message: err.message })
    }
}


module.exports = { 
    userRegistration 
}
