import mongoose from 'mongoose';
import mongodb from 'mongodb';
const ObjectId = mongodb.ObjectID;
import express from 'express';
const Router = express.Router();

import TaskList from '../Assets/Models/tasklist.model';

Router.use('/get', (req, res, next) => {
  let token = req.query.token;
  let headerID = req.query.headerid;

  if(!token){
    const error = new Error('Invalid Token');
    error.httpStatusCode = 400;
    return next(error);
  }
  if(!headerID){
    const error = new Error('Invalid Header ID');
    error.httpStatusCode = 400;
    return next(error);
  }

  TaskList.find({token: token, headerID: headerID}, (err, tasks) => {
    if(err){
      const error = new Error('Uh-Oh! Something went Wrong!');
      error.httpStatusCode = 500;
      return next(error);
    }
    else{
      if(tasks.length != 0){
        res.json({message: 'success', tasks: tasks});
      }
      else{
        res.json({message: 'failure'});
      }
    }
  })
})

Router.use('/add', (req, res, next) => {
  let token = req.body.token;
  let taskID = req.body.taskID;
  let task = req.body.task;
  let headerID = req.body.headerID;
  let completed = req.body.completed;

  if(!token){
    const error = new Error('Invalid Token');
    error.httpStatusCode = 400;
    return next(error);
  }
  if(!taskID){
    const error = new Error('Invalid Task ID');
    error.httpStatusCode = 400;
    return next(error);
  }
  if(!task){
    const error = new Error('Invalid Task');
    error.httpStatusCode = 400;
    return next(error);
  }
  if(!completed){
    const error = new Error('Invalid Completed status');
    error.httpStatusCode = 400;
    return next(error);
  }
  if(!headerID){
    const error = new Error('Invalid Header ID');
    error.httpStatusCode = 400;
    return next(error);
  }

  const newTask = new TaskList;
  newTask.token = token;
  newTask.task = task;
  newTask.taskID = taskID;
  newTask.headerID = headerID;
  newTask.completed = completed;

  newTask.save((err, task) => {
    if(err){
      const error = new Error('Uh-Oh! Something went Wrong!');
      error.httpStatusCode = 500;
      return next(error);
    }
    else{
      if(Object.keys(task).length != 0){
        res.json({message: 'success'});
      }
      else{
        res.json({message: 'failure'});
      }
    }
  })
})

Router.use('/update', (req, res, next) => {
  let taskID = req.body.taskID;
  let token = req.body.token;
  let headerID = req.body.headerID;
  let completed = req.body.completed;

  if(!token){
    const error = new Error('Invalid Token');
    error.httpStatusCode = 400;
    return next(error);
  }
  if(!taskID){
    const error = new Error('Invalid Task ID');
    error.httpStatusCode = 400;
    return next(error);
  }
  if(!headerID){
    const error = new Error('Invalid Header ID');
    error.httpStatusCode = 400;
    return next(error);
  }
  if(!completed){
    const error = new Error('Invalid Completed Status');
    error.httpStatusCode = 400;
    return next(error);
  }

  TaskList.updateOne({token: token, taskID: taskID, headerID: headerID}, {
    $set: {
      completed: completed
    }
  }, (err, docStatus) => {
      if(err){
        const error = new Error('Uh-Oh! Something went Wrong!');
        error.httpStatusCode = 500;
        return next(error);
      }
      else{
        if(docStatus.ok == 1){
          res.json({message: 'success'});
        }
        else{
          res.json({message: 'failure'});
        }
      }
    })
})

Router.use('/delete', (req, res, next) => {
  let token = req.body.token;
  let taskID = req.body.taskID;
  let headerID = req.body.headerID;

  if(!token){
    const error = new Error('Invalid Token');
    error.httpStatusCode = 400;
    return next(error);
  }
  if(!taskID){
    const error = new Error('Invalid Task ID');
    error.httpStatusCode = 400;
    return next(error);
  }
  if(!headerID){
    const error = new Error('Invalid Header ID');
    error.httpStatusCode = 400;
    return next(error);
  }

  TaskList.deleteOne({token: token, taskID: taskID, headerID: headerID}, (err, docStatus) => {
    if(err){
      const error = new Error('Uh-Oh! Something went Wrong!');
      error.httpStatusCode = 500;
      return next(error);
    }
    else{
      if(docStatus.deletedCount == 1){
        res.json({message: 'success'});
      }
      else{
        res.json({message: 'failure'});
      }
    }
  })
})

module.exports = Router;
