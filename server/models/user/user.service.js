const userSchema = require("./user.schema");
const mongoose = require("../mongoose");

const User = mongoose.model("User", userSchema);

async function checkUserValid(user) {
  try {
    const existUser = await User.findOne({ username: user.username }).exec();
    return existUser && existUser.password === user.password ? true : false;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function createUser(user) {
  await User.create(user);
}

module.exports = {
  checkUserValid,
  createUser,
};
