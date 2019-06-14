// Requires
var express = require('express');

// Initialize variables
var app = express();

// Listen petitions
app.listen(3000, () => {
  console.log('Express server port 3000 \x1b[32m%s\x1b[0m','online');
});
