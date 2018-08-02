const http = require("http");
const router = require("./router");

const server = http.createServer(router);
const port = process.env.PORT || 6002;

server.listen(port, () => {
  console.log("Listening to port: " + port);
});
