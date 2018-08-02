
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
var length=response['totalResults'];
for(var i=0;i<length;i++){
//append here

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
