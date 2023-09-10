import express from 'express';
import Promise from 'bluebird';
import bodyParser from 'body-parser';
import Event from './models/Events.js'

import database from './config/database.js';


const app = express();

// import express from 'express';
// import bodyParser from 'body-parser';
// import Event from './models/Events.js';
// import database from './config/database.js';

// const app = express();

const PORT = process.env.PORT || 4000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Route to retrieve events
app.get('/api/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`HTTP Server Started at port ${PORT}`);
});

// Connect to the database
database(app).then(() => {
  console.log('Connected to database');
}).catch((error) => {
  console.error('Error connecting to database:', error);
  process.exit(1); // Exit the process if there's a database connection error
});


// const promise = Promise.resolve()
//   .then(() => {

//     console.log("Setting up database.....");
//     return database(app);
//   })
//   .then(() => {

//     console.log('hereeeee');
//     // app.set('port', 4000);
//     app.use(bodyParser.json()); 


//     app.get('/api/events', async (req, res) => {
//       try {
//         const events = await Event.find();
//         res.json(events);
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//       }
//     });

//     const PORT = 4000;
//     app.listen(PORT, null);
//     console.log(`HTTP Server Started at port ${PORT}`);
//   })

//   promise.catch((error) => {
//     console.error('Unhandled Promise Rejection:', error);
//   });
  


  // export default promise;