const generateToken = require("../middleware/generateToken");
const UserModel = require("./user.model");
const bcrypt = require("bcrypt");

// user registration
const userRegistration = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const user = new UserModel({ userName, email, password });
    const result = await user.save();
    res.status(201).json(result);
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.log("User registration error:", err.message);
    res.status(500).json({ message: err.message });
  }
};

// user Login

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await user.comparePassword(password);
 
    if (!isMatch) {
      return res.status(404).json({ message: "Invalid credentials" });
    }
    const token = await generateToken(user._id);
    res.cookie("token", token, { 
        httpOnly: true, 
        secure: true, 
        sameSite: "None" 
    });
    res.status(200).json({
         message: "Login successful",
         token, 
         user:{
            _id: user._id,
            userName: user.userName,
            email: user.email,
            role: user.role,
            profileImage: user.profileImage,
            profession: user.profession,
            bio: user.bio
         } 
        });
  } catch (err) {
    console.log("User login error:", err.message);
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  userRegistration,
  userLogin,
};
