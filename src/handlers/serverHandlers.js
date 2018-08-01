const path = require("path");
const fs = require("fs");
const request = require("request");
const func=require('../functions');
//let testurl='https://newsapi.org/v2/top-headlines?country=au&apiKey=01b3313330fc4ce993dbddc83190e60f'
const APIWrapper = (url, cb) => {
  request(url, function(error, response, body) {
    if (!error) cb(body);

  });
};

const handlerAPI = (req, res) => {

  let url1 = req.url; // 'selected/United_Kingdom  or
  // selected/United_Kingdom&category=SelectedCategory

  // should handle the url with catagory

  let API_KEY = "01b3313330fc4ce993dbddc83190e60f";
  let countryName = func.pureCountry(url1); // should delete' __' and return country name
  let SelectedCategory = func.pureCategory(url1); // returns category
  let coutryShortcut = func.searchCountry(countryName); // return coutryShortcut will need JSON file

  if (SelectedCategory != 0 /* He selected Category*/) {
    let url =
      "https://newsapi.org/v2/top-headlines?country=" +
      countryShortcut +
      "&category=" +
      SelectedCategory +
      "&apiKey=" +
      API_KEY;
  } else {
    let url =
      "https://newsapi.org/v2/top-headlines?country=" +
      countryShortcut +
      "&apiKey=" +
      API_KEY;
  }

  //================== here The url should be ready =============
 //=========== Send the request down here =======================


APIWrapper(url, response => {
   res.writeHead(200, { "Content-Type": "application/json" });
   res.end(response);

  });
};  // ======= the end of handlerAPI function


//
// APIWrapper(testurl, response => {
// ====================TEST El API Request ==========
// ==================================================
// ==================== Oh yah working ==============
//    console.log(response);
//
//
//   });

module.exports = {
  handlerAPI,
  APIWrapper
};
