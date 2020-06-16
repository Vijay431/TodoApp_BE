import mongoose from 'mongoose';

const AuthSchema = mongoose.Schema({
  username: {
    type: String,
    required: 'required'
  },
  password: {
    type: String,
    required: 'required'
  }
})

module.exports = mongoose.model('users', AuthSchema);
