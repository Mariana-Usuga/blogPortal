const { Router } = require('express');
//const { ArticleSchema } = require('./article.schema');
//const { validate } = require('../../middleware/validateRequest');

const { createCommentHandler } = require('./comment.controller');

const { isAuthenticated } = require('../../auth/auth.services');

const router = Router();

router.post('/:articleId', isAuthenticated(), createCommentHandler);

module.exports = router;
