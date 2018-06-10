const mongoose = require('mongoose');

// blueprint
const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
});

// creates models/data/objects
module.exports = mongoose.model('Post', postSchema);

