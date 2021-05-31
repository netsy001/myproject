const  mongoose = require  ('mongoose');


const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is Required"]
  },

  password: {
    type: String,
    required: [true, "Password is Required"]
  },

  email: {
    type: String,
    required: [true, "Email required"]
  },
  id: { type: String },

  //for our backend info when the user registered.
  userCreated: {
    type: Date,
    default: Date.now
  }
});


//exports take two arguments one the name of our mongotable and second the name of our schema
module.exports =  mongoose.model('User', userSchema);
