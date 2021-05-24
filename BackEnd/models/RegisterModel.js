//import mongoose
const mongoose = require('mongoose');

const RegisterSchemaTemplate = new mongoose.Schema({
  fullName: {
    type: String,
    trim: true,
    required: "FullNmae is Required"
  },
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."]
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
    required: "Email required"
  },
  //for our backend info when the user registered.
  userCreated: {
    type: Date,
    default: Date.now
  }
});

//exports take two arguments one the name of our mongotable and second the name of our schema
module.exports = mongoose.model('register', RegisterSchemaTemplate)
