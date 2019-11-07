const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require('./routes');

// express config
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// API routes
app.use(routes);

// mongoDB config with mongoose
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/googlebooks';
mongoose.connect(MONGODB_URI);

// Define any API routes before this runs
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
  });
  
// define port
app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });