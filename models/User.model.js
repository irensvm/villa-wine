const {
  Schema,
  model
} = require('mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    required: [true, "Email is required"],
    match: [/^\S+@\S+\.\S+$/, 'Not a valid email.']

  },
  passwordHash: {
    type: String,
    required: [true, "Password is required (Minimum six characters, at least one letter and one number)"]
  }
},
{
  timestamps: true
});

module.exports= model('User', userSchema);


