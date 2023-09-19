const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  creationDate: {
    type: String,
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  /*articleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article',
    required: true,
  },*/
});

module.exports = mongoose.model('Comment', CommentSchema);
