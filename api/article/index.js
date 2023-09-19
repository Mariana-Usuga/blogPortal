const { Router } = require('express');
//const { ArticleSchema } = require('./article.schema');
//const { validate } = require('../../middleware/validateRequest');

const {
  createArticleHandler,
  getAllArticlesHandler,
} = require('./article.controller');

const { isAuthenticated } = require('../../auth/auth.services');

const router = Router();

router.get('/', getAllArticlesHandler);
router.post('/', isAuthenticated(), createArticleHandler);

module.exports = router;
