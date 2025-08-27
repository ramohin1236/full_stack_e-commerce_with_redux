const { Schema, model } = require("mongoose");

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

const user = model("User", userSchema)

module.exports = user;