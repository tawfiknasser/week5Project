const path =require("path")
const fs=require('fs')
const request=require("request")
const searchCountry = require("../searchCountry")

const handlerAPI=(req,res)=>{
    let url1=req.url; // 'selected/United_Kingdom  or
    // selected/United_Kingdom&category=SelectedCategory


    // should handle the url with catagory
    let API_KEY = "01b3313330fc4ce993dbddc83190e60f";
    let countryName="United Kingdom"; // should delete __
    let SelectedCategory="From the Link";
    let coutryShortcut = searchCountry(countryName);
    res.writeHead(200,{"Content-Type"})
    res.end(JSON.stringify({countryShortcut}));
    if(/* He selected Category*/) {
    let url = "https://newsapi.org/v2/top-headlines?country=" +
     countryShortcut+ "&category="+SelectedCategory +  "apiKey=" + API_KEY;
   };
else   let url = "https://newsapi.org/v2/top-headlines?country=" +
     countryShortcut+ "apiKey=" + API_KEY;


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
