import mongoose from 'mongoose';

const TaskHeaderSchema = mongoose.Schema({
  token: {
    type: String,
    required: 'required'
  },
  header: {
    type: String
  },
  headerID: {
    type: String
  }
})

module.exports = mongoose.model('task_headers', TaskHeaderSchema);
