import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
const app = express();

//DB connection
import DB from './Assets/DB/DBConnection';
DB.Mongoose;

//Default middelwares
import cors from 'cors';
app.use(cors());
import bodyParser from 'body-parser';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Custom middlewares
import Auth from './Routes/auth.route';
app.use('/auth', Auth)

//404 Not Found
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.httpStatusCode = 404;
  next(error);
})

//Error handler
app.use((error, req, res, next) => {
  res.status(error.httpStatusCode).send({
      status: error.httpStatusCode || 500,
      message: error.message
  });
})

//App listening PORT
app.listen(process.env.APP_PORT, () => {
  console.log(`Server started at http://localhost:${process.env.APP_PORT}`);
})
