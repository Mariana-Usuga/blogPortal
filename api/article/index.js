const { Router } = require('express');
//const { ArticleSchema } = require('./article.schema');
//const { validate } = require('../../middleware/validateRequest');

const { createArticleHandler } = require('./article.controller');

const { isAuthenticated } = require('../../auth/auth.services');

const router = Router();

router.post('/', isAuthenticated(), createArticleHandler);

module.exports = router;
