var express = require('express');
var app = express();
var User = require('../models/user');

app.get('/', (request, response, next) => {
  User.find({}, 'name email image role').exec((error, users) => {
    if (error) {
      return error.status(200).json({
        ok: false,
        message: 'Error al cargar usuarios',
        errors: error
      });
    }
    response.status(200).json({
      ok: true,
      users: users
    });
  });
});

module.exports = app;
