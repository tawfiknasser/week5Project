const path = require("path");
const fs = require("fs");
const request = require("request");
const searchCountry = require("../searchCountry");

const handlerAPI = (req, res) => {

  let url1 = req.url; // 'selected/United_Kingdom  or
  // selected/United_Kingdom&category=SelectedCategory

  // should handle the url with catagory

  let API_KEY = "01b3313330fc4ce993dbddc83190e60f";
  let countryName = "United Kingdom"; // should delete __   // build more function
  let SelectedCategory = "From the Link"; // build more function
  let coutryShortcut = searchCountry(countryName);

  // res.writeHead(200,{"Content-Type"})
  // res.end(JSON.stringify({countryShortcut}));
  if (true /* He selected Category*/) {
    let url =
      "https://newsapi.org/v2/top-headlines?country=" +
      countryShortcut +
      "&category=" +
      SelectedCategory +
      "apiKey=" +
      API_KEY;
  } else {
    let url =
      "https://newsapi.org/v2/top-headlines?country=" +
      countryShortcut +
      "apiKey=" +
      API_KEY;
  }

  //================== here The url should be ready =============
 //=========== Send the request down here =======================


APIWrapper(url, response => {
   res.writeHead(200, { "Content-Type": "application/json" });
   res.end(response);

  });
};  // ======= the end of handlerAPI function


const APIWrapper = (url, cb) => {
  request(url, function(error, response, body) {
    if (!error) cb(body);

  });
};

module.exports = {
  handlerAPI,
  APIWrapper
};
