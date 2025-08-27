const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt')



const userSchema = new Schema({
  userName: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profileImage: String,
  bio:{
    type: String,
    maxLength: 100
  },
  profession: String,
  role: {
    type: String,
    // enum: ['user', 'admin'],
    default: 'user'
  }, 
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// hash password
userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};


const user = model("User", userSchema)

module.exports = user;