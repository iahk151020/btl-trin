const { Schema } = require("../mongoose");
const bookSchema = new Schema({
  title: String,
  author: String,
  genre: String,
  publishDate: String,
  pages: Number,
  image: String,
  description: String,
});

module.exports = bookSchema;
