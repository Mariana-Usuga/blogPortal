const Article = require('./article.model');

async function getAllArticles() {
  try {
    const articles = await Article.find()
      .populate({
        path: 'comments',
        populate: {
          path: 'authorId',
          model: 'User',
          select: 'name',
        },
      })
      .populate('authorId');
    return articles;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

async function createArticle(article) {
  try {
    const newArticle = new Article(article);
    const savedArticle = await newArticle.save();
    return savedArticle;
  } catch (error) {
    throw error;
  }
}

async function getArticleById(id) {
  try {
    const article = await Article.findById(id)
      .populate({
        path: 'comments',
        populate: {
          path: 'authorId',
          model: 'User',
          select: 'name',
        },
      })
      .populate('authorId');
    return article;
  } catch (error) {
    throw error;
  }
}

async function updateArticle(id, article) {
  try {
    const updatedArticle = await Article.findByIdAndUpdate(id, article);
    return updatedArticle;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createArticle,
  updateArticle,
  getArticleById,
  getAllArticles,
};
