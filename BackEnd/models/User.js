import mongoose from 'mongoose';


const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "FullNmae is Required"]
  },

  password: {
    type: String,
    trim: true,
    required: [true, "Password is Required"],
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
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
export default mongoose.model('User', userSchema)
