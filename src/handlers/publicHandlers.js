const path = require("path");
const fs = require("fs");
const searchCountry = require("../searchCountry");

const handler500 = res => {
  res.writeHead(500, { "content-type": "text/plain" });
  res.end("server error");
};
const handler404 = res => {
  fs.readFile(
    path.join(__dirname, "..", "..", "public", "404.html"),

    (err, file) => {
      if (err) {
        handler500(res);
        return;
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(file);
      }
    }
  );
};

const handlerPublic = (req, res) => {};

const handlerCountries = (req, res) => {};

module.exports = {
  handler500,
  handler404,
  handlerPublic,
  handlerCountries
};
