const article = require('./api/article');
const user = require('./api/user');
const authLocal = require('./auth/local');
const comment = require('./api/comment');

function routes(app) {
  app.use('/api/user', user);
  app.use('/api/article', article);
  app.use('/api/comment', comment);
  app.use('/auth/local', authLocal);
}

module.exports = routes;
