import mongoose from 'mongoose';

const TaskListSchema = mongoose.Schema({
  token: {
    type: String,
    required: 'required'
  },
  taskID: {
    type: String
  },
  task: {
    type: String
  },
  headerID: {
    type: String
  },
  completed: {
    type: String
  }
})

module.exports = mongoose.model('tasks', TaskListSchema);
