const Comment = require('./comment.model');

async function createComment(comment) {
  try {
    const newComment = new Comment(comment);
    const savedComment = await newComment.save();
    return savedComment;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createComment,
};
