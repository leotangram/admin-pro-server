// Requires
var express = require('express');
var mongoose = require('mongoose');

// Import Routes
var appRoutes = require('./routes/app');
var userRoutes = require('./routes/user');

// Initialize variables
var app = express();

// Conexión a la base de datos
mongoose.connection.openUri(
  'mongodb://localhost:27017/hospitalDB',
  (error, response) => {
    if (error) throw error;
    console.log('Data base: \x1b[32m%s\x1b[0m', 'online');
  }
);

// Routes
app.use('/user', userRoutes);
app.use('/', appRoutes);

// Listen petitions
app.listen(3000, () => {
  console.log('Express server port 3000 \x1b[32m%s\x1b[0m', 'online');
});
