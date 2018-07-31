const publichand = require("./handlers/publicHandlers");
const serverhand = require("./handlers/serverHandlers");

const router = (req, res) => {
  let url = req.url;
  if (
    url === "/" ||
    ["/index.js", "/style.css", "/images/pro-news-bg.jpeg","/index.html", "/xhr.js"].includes(url)
  ) {
    publichand.handlerPublic(req, res);
  } else if (url.includes("apinews")) {
    serverhand.handlerAPI(req, res);
  } else {
    publichand.handler404(res);
  }
};

module.exports = router;
