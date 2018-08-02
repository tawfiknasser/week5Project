
function sendData(SelectedCountry,SelectedCategory){ // on clicking GO button

//url=SelectedCountry+ callCategory(SelectedCategory);
// ====url should be ====
// selected/United_Kingdom&category=SelectedCategory

let url="selected/"+callCountry(SelectedCountry)+callCategory(SelectedCategory);
if(callCountry(SelectedCountry)==='bad')
return; // Don't Do any thing if no country selected

xhrCall(url,appendNews);
}

function appendNews(response){ // the response is the object  of news
// creating elements

var flexbox=document.getElementById("flexbox");
var length=response['articles'].length;
var art=response['articles'];
for(var i=1;i<length;i+=2){
//append here

 var hreff=document.createElement("a");

 hreff.setAttribute("href",art[i].url);
 var href=document.createElement('a');
 var article=document.createElement('article');
 article.setAttribute("class","grid-container");
 article.appendChild(hreff);

 var section1=document.createElement('section');
 section1.setAttribute("class","imgTitle");

 var div1=document.createElement('div');
 div1.setAttribute("class","grid-Img");
 var img=document.createElement('img');
 img.setAttribute("src",art[i].urlToImage);
 div1.appendChild(img);

 var div2=document.createElement('div');
 div2.setAttribute("class","grid-title");

 var section2=document.createElement('section');
 section2.setAttribute("class","grid-item");

 hreff.appendChild(section1);
 hreff.appendChild(section2);

 section1.appendChild(div1);
 section1.appendChild(div2);
 flexbox.appendChild(article);

 //append textContent
section2.textContent=art[i].description;
div2.textContent=art[i].title;

}

}
function appendCountries(response){  // the response is the object of countries

  var countrySection=document.getElementById("country");
(Object.keys(response)).forEach(function(el){
  var op = document.createElement("option");
  op.setAttribute("value",response[el]);
  countrySection.appendChild(op);
  op.textContent=response[el];
});

}
