const {
  getAllBooksController,
  getBookByIdController,
  addNewBookController,
  updateBookByIdController,
  deleteBookController,
} = require("./books.controller");

const router = require("express").Router();
const multer = require("multer");
const upload = multer({
  dest: "/uploads",
});
router.get("/", getAllBooksController);
router.get("/:id", getBookByIdController);
router.put("/:id", upload.single("image"), updateBookByIdController);
router.post("/", upload.single("image"), addNewBookController);
router.delete(`/:id`, deleteBookController);

module.exports = router;
