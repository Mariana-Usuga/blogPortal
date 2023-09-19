const { createArticle, getAllArticles } = require('./article.service');

async function getAllArticlesHandler(req, res) {
  try {
    const articles = await getAllArticles();

    if (articles.length == 0) {
      return res.status(404).json({ message: `no markets found` });
    }

    return res.status(200).json(articles);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function createArticleHandler(req, res) {
  const { title } = req.body;
  const { user } = req;
  console.log('entra en createHandler ', user);
  try {
    if (!title) {
      return res.status(422).json({ response: 'Missing values in the body' });
    }
    const { _id } = user;

    const newArticle = {
      ...req.body,
      authorId: _id,
    };

    const article = await createArticle(newArticle);
    return res.status(201).json(article);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createArticleHandler,
  getAllArticlesHandler,
};
