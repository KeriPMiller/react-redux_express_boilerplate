const express = require('express');
const path = require('path'); // path formatting utility
const bodyParser = require('body-parser'); // parsing middleware
const morgan = require('morgan'); // logging middleware
const db = require('./db'); // connect db/index.js

// define express server
const app = express();

// use morgan logging middleware
app.use(morgan('dev'));

// use body-parser middleware
app.use(bodyParser.json()); // parse JSON requests
app.use(bodyParser.urlencoded({
  extended: true
})); // parse URL requests

// static routing for /public/ path
app.use(express.static(path.join(__dirname, '..', 'public')));

// send index.html
app.use('*', (req, res, next) =>
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
);


// start server and listen on port 3000 (usually done after a db.sync)
const port = 3000
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
  // sync db
  db.sync()
    .then(() => console.log(`Database has Synced`));
  // error handling
    // .catch(() => console.error(`Internal Server Error`, err, err.stack));
});

// error-handling, should come AFTER all other routes
// app.use((err, req, res, next) =>
//   res.status(err.status || 500).send(err.message || 'Internal server error.')
// );
