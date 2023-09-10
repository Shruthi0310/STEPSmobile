import mongoose from 'mongoose';
import Promise from 'bluebird';
import ClientError from '../../common/errors/ClientError.js';


export function connectDb() {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoCreate: true,
  };

  const DATABASE_URL = 'mongodb://127.0.0.1:27017/steps-api-development';

  return new Promise((resolve, reject) => {
    mongoose.Promise = Promise;
    mongoose.connect(DATABASE_URL, options)
  .then(() => {
    console.log('Connected to database');
  })
  .catch((err) => {
    throw new ClientError(`Unable to connect to database\n${err}`);
  });

  });
}

export default function () {
  return connectDb()
    .then(() => {
      console.log('Connected to database :)');
    })
    .catch((error) => {
      console.error('Error connecting to database:', error);
      throw error; // Rethrow the error to indicate a failed startup
    });
}
