const mongoose = require('mongoose');
const nanoid = require('nanoid');

// const shortIdGenerator = customAlphabet(
//   'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ',
//   10
// );

const UrlScheme = mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  shortId: {
    type: String,
    unique: true,
    required: true,
    default: nanoid(),
  },
  url: {
    type: String,
    required: true,
  },
  clicked: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Url', UrlScheme);
