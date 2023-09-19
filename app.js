const express = require('express');

const expressConfig = require('./config/express');
const connectDB = require('./config/database');
const routes = require('./routes');
const { config } = require('./config/index');

const app = express();

expressConfig(app);

const PORT = process.env.PORT | config.PORT;

// Start server
app.listen(PORT, () => {
  // connect to database
  connectDB();

  // Routes
  routes(app);

  console.log(`Server running 🤖 at http://localhost:${PORT}/`);
});

//exports.app = functions.https.onRequest(app);

module.exports = app;
