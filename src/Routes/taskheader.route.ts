import mongoose from 'mongoose';
import express from 'express';
const Router = express.Router();

import TaskHeader from '../Assets/Models/taskheader.model';

Router.use('/get', (req, res, next) => {
  let token = req.query.token;

  if(!token){
    const error = new Error('Invalid Token');
    error.httpStatusCode = 400;
    return next(error);
  }

  TaskHeader.find({token: token}, (err, headers) => {
    if(err){
      const error = new Error('Uh-Oh! Something went Wrong!');
      error.httpStatusCode = 500;
      return next(error);
    }
    else{
      if(headers.length != 0){
        res.json({message: 'success', headers: headers});
      }
      else{
        res.json({message: 'faliure'});
      }
    }
  })
})

Router.use('/add', (req, res, next) => {
  let token = req.body.token;
  let header = req.body.header;
  let headerID = req.body.headerID;

  if(!token){
    const error = new Error('Invalid Token');
    error.httpStatusCode = 400;
    return next(error);
  }
  if(!header){
    const error = new Error('Invalid Header');
    error.httpStatusCode = 400;
    return next(error);
  }
  if(!headerID){
    const error = new Error('Invalid Header ID');
    error.httpStatusCode = 400;
    return next(error);
  }

  const newHeader = new TaskHeader;
  newHeader.token = token;
  newHeader.header = header;
  newHeader.headerID = headerID;

  newHeader.save((err, header) => {
    if(err){
      const error = new Error('Uh-Oh! Something went Wrong!');
      error.httpStatusCode = 500;
      return next(error);
    }
    else{
      if(Object.keys(header).length != 0){
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
  let headerID = req.body.headerID;

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

  TaskHeader.deleteOne({headerID: headerID, token: token}, (err, docStatus) => {
    if(err){
      const error = new Error('Uh-Oh! Something went Wrong!');
      error.httpStatusCode = 500;
      return next(error);
    }
    else{
      if(docStatus.deletedCount === 1){
        res.json({message: 'success'});
      }
      else{
        res.json({message: 'failure'});
      }
    }
  })
})

module.exports = Router;
