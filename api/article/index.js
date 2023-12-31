const { Router } = require('express');
//const { ArticleSchema } = require('./article.schema');
//const { validate } = require('../../middleware/validateRequest');

const {
  createArticleHandler,
  getAllArticlesHandler,
  getArticleByIdHandler,
} = require('./article.controller');

const { isAuthenticated } = require('../../auth/auth.services');

const router = Router();

router.get('/', getAllArticlesHandler);
router.post('/', isAuthenticated(), createArticleHandler);
router.get('/:id', getArticleByIdHandler);

module.exports = router;
