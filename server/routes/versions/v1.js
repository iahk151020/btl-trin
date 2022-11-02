const router = require("express").Router();
const bookRouter = require("../books/books.routes");
const authRouter = require("../auth/auth.routes");

router.use("/books", bookRouter);
router.use("/auth", authRouter);

module.exports = router;
