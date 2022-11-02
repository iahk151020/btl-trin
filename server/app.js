const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const v1 = require("./routes/versions/v1");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
app.use("/v1", v1);

module.exports = app;
