const { Schema } = require("../mongoose");
const userSchema = new Schema({
  fullName: String,
  username: String,
  password: String,
});

module.exports = userSchema;
