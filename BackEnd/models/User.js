//import mongoose
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    trim: true,
    required: [true, "FullNmae is Required"]
  },
  username: {
    type: String,
    trim: true,
    required: [true, "Username is Required"]
  },

  password: {
    type: String,
    trim: true,
    required: [true, "Password is Required"],
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },
  resetPasswordToken:{
    type: String,
  resetPasswordExpire:Date
  },
  // DOB: {
  //   type: Date,
  //   required: true,
  //   trim: true,
  // },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    required: [true, "Email required"]
  },
  
  //for our backend info when the user registered.
  userCreated: {
    type: Date,
    default: Date.now
  }
});

UserSchema.pre("save", asynce function(){
  if(!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt)
  next();
})

//exports take two arguments one the name of our mongotable and second the name of our schema
module.exports = mongoose.model('register', UserSchema)
