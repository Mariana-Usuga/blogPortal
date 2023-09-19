const { createComment } = require('./comment.service');
const { getArticleById, updateArticle } = require('../article/article.service');

async function createCommentHandler(req, res) {
  const { content } = req.body;
  const { user } = req;
  const { articleId } = req.params;
  console.log('entra en createHandler');
  try {
    if (!content) {
      return res.status(422).json({ response: 'Missing values in the body' });
    }

    const { _id } = user;

    const newComment = {
      ...req.body,
      authorId: _id,
    };

    const comment = await createComment(newComment);

    const articleCurrent = await getArticleById(articleId);

    const articleUpdate = {
      ...articleCurrent._doc,
      comments: [...articleCurrent._doc?.comments, comment._id],
    };
    //articleCurrent.comments.push(comment._id);

    console.log('articleUpdate ', articleUpdate);

    await updateArticle(articleId, articleUpdate);
    return res.status(201).json(comment);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createCommentHandler,
};
