const {
  checkUserValid,
  createUser,
} = require("../../models/user/user.service");

const loginController = async (req, res, next) => {
  let body = req.body;
  let valid = await checkUserValid(body);
  if (valid) {
    return res.status(201).json("login successfully");
  }
  return res.status(400).json("username or password is wrong");
};

const registerController = async (req, res, next) => {
  const body = req.body;
  console.log(body);
  await createUser(body);
  return res.status(201).json("create user successfully");
};

module.exports = {
  loginController,
  registerController,
};
