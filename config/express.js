const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:4200',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Si estás manejando cookies
};

function connectDB(app) {
  app.use(express.json());
  app.use(morgan('dev'));
  app.use(cors(corsOptions));
  app.use(express.urlencoded({ extended: false }));
}

module.exports = connectDB;
