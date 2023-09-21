const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
//const mongoSanitize = require('express-mongo-sanitize');

function connectDB(app) {
  //app.use(mongoSanitize());
  app.use(express.json());
  app.use(morgan('dev'));
  app.use(cors());
  app.use(express.urlencoded({ extended: false }));
}

module.exports = connectDB;
