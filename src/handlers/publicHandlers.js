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

const handlerPublic = (req, res) => {
  let url =req.url;
  if(url==='/') url='index.html';
  let extension = url.split(".")[1];
  let extensionType = {
      html: "text/html",
      css: "text/css",
      js: "application/javascript",
      ico: "image/x-icon",
      jpg: "image/jpeg",
      png: "image/png",
      json: "application/json"
    };
    let filePath = path.join(__dirname, "..","..", "public", url);
    fs.readFile(filePath, function(error, file) {
      if (error) {
      handler500(res);
      } else {
        res.writeHead(200, { "Content-Type": extensionType[extension] });
        res.end(file);
      }
    });
};

const handlerCountries = (req, res) => {};

module.exports = {
  handler500,
  handler404,
  handlerPublic,
  handlerCountries
};
