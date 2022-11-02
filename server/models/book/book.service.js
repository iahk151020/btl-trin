const bookSchema = require("./book.schema");

const mongoose = require("../mongoose");

const Book = mongoose.model("Book", bookSchema);

const getAllBooks = async () => {
  return await Book.find({}).exec();
};

const getABookById = async (id) => {
  return Book.findById(id).exec();
};

const updateBookById = async (id, data) => {
  await Book.updateOne({ _id: id }, data);
};

const addBook = async (data) => {
  return Book.create(data);
};

const deleteBookById = async (id) => {
  await Book.findByIdAndRemove(id);
};

module.exports = {
  getABookById,
  getAllBooks,
  updateBookById,
  addBook,
  deleteBookById,
};
