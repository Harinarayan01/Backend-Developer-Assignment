const mongoose = require('mongoose');

const paragraphSchema = new mongoose.Schema({
  text: String,
  words: [String]
});

module.exports = mongoose.model('Paragraph', paragraphSchema);
