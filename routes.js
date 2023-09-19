const article = require('./api/article');
const user = require('./api/user');
const authLocal = require('./auth/local');
const comment = require('./api/comment');
/*const upload = require('./api/upload');
const payment = require('./api/payment');
const authLocal = require('./auth/local');
const serverless = require('serverless-http');*/

function routes(app) {
  app.use('/api/user', user);
  app.use('/api/article', article);
  app.use('/api/comment', comment);
  app.use('/auth/local', authLocal);
}

//app.use('/.netlify/functions/api', routes);

//module.exports.handler =
module.exports = routes;
