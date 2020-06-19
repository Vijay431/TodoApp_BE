import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import 'dotenv/config';

const Mongoose = mongoose.connect(process.env.DB_URL, {useUnifiedTopology: true, useNewUrlParser: true}, (err) => {
  if(err) return err;
  console.log('DB connected successfully!');
})

module.exports = Mongoose;
