const http = require("http");
const app = require("./app");

async function startServer() {
  const server = http.createServer(app);
  server.listen(8000, () => console.log(`Server is running on port 8000`));
}

startServer();
