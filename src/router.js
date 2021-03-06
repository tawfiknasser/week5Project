const publichand = require("./handlers/publicHandlers");
const serverhand = require("./handlers/serverHandlers");

const router = (req, res) => {
  let url = req.url;

  if (url === "/Test500") publichand.handlerTest500(req, res);

  else if (
    url === "/" ||
    ["/index.js", "/style.css", "/index.html", "/xhr.js","/logic.js"].includes(url)
  ) {
    publichand.handlerPublic(req, res);
  }

   else if (url.indexOf("selected") == 0 || url.indexOf("/selected") == 0) {

    serverhand.handlerAPI(req, res);
  }

  // else if(url.includes("searchMeCountry")) {
  //   publichand.handlerCountries(req,res);
  // }
  else {

    publichand.handler404(res);
  }
};

module.exports = router;
