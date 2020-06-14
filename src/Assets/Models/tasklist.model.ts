import mongoose from 'mongoose';

const TaskListSchema = mongoose.Schema({
  token: {
    type: String,
    require: 'required'
  },
  taskID: {
    type: String
  },
  task: {
    type: String
  },
  completed: {
    type: String
  }
})

module.exports = mongoose.model('tasks', TaskListSchema);