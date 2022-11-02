const {
  getAllBooksController,
  getBookByIdController,
  addNewBookController,
  updateBookByIdController,
  deleteBookController,
} = require("./books.controller");

const router = require("express").Router();

router.get("/", getAllBooksController);
router.get("/:id", getBookByIdController);
router.put("/:id", updateBookByIdController);
router.post("/", addNewBookController);
router.delete(`/:id`, deleteBookController);

module.exports = router;
