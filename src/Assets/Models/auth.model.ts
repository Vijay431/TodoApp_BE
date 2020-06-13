import mongoose from 'mongoose';

const AuthSchema = mongoose.Schema({
  username: {
    type: String,
    require: 'required'
  },
  password: {
    type: String,
    require: 'required'
  }
})

module.exports = mongoose.model('users', AuthSchema);
