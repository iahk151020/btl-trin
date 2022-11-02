const mongoose = require("mongoose");
const password = `Khai151020`;

const url = `mongodb+srv://iahkimi1510:${password}@cluster0.ds6zi.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(url, connectionParams)
  .then(() => console.log(`Connected to MongoDB Atlas`))
  .catch((err) =>
    console.log(`Error connecting to MongoDB Atlas: ${err.message}`)
  );

module.exports = mongoose;
