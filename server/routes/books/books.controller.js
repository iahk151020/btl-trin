const {
  getAllBooks,
  getABookById,
  addBook,
  updateBookById,
  deleteBookById,
} = require("../../models/book/book.service");
const cloudinary = require("../../utils/cloudinary");

const getAllBooksController = async (req, res, next) => {
  try {
    const books = await getAllBooks();
    return res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

const getBookByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await getABookById(id);
    return res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};

const addNewBookController = async (req, res, next) => {
  try {
    const body = req.body;
    let result;
    if (req.file) {
      result = await cloudinary.uploader.upload(req.file.path, {
        eager: {
          width: 400,
          height: 400,
        },
      });
    }

    body.image = result ? result.url : "";
    const newBook = await addBook(body);
    return res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
};

const updateBookByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;

    let result;
    if (req.file) {
      result = await cloudinary.uploader.upload(req.file.path, {
        eager: {
          width: 400,
          height: 400,
        },
      });
    }

    body.image = result ? result.url : "";
    await updateBookById(id, body);
    return res.status(200).json(`update successfully`);
  } catch (error) {
    next(error);
  }
};

const deleteBookController = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteBookById(id);
    return res.status(204).json("Delete successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllBooksController,
  addNewBookController,
  getBookByIdController,
  updateBookByIdController,
  deleteBookController,
};
