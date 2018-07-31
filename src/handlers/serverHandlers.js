const path =require("path")
const fs=require('fs')
const request=require("request")
const searchCountry = require("../searchCountry")
const handlerAPI=(req,res)=>{
  let url1=req.url; // '/apipix?q=' + query
    let API_KEY = "01b3313330fc4ce993dbddc83190e60f";
    let coutryShortcut = searchCountry(url)
    let url = "https://newsapi.org/v2/top-headlines?country=" + countryShortcut + "apiKey=" + API_KEY;

     xhrAPI(url,(xhrRes)=>{
      res.writeHead(200,{"Content-Type":"application/json"})
      res.end((xhrRes))
     });
}

const APIWrapper=(url,cb)=>{
  request(url, function (error, response, body) {
    if(!error)
     cb(body);
   });
}

module.exports={
  handlerAPI,
  APIWrapper
}
