
function sendData(SelectedCountry,SelectedCategory){ // on clicking GO button

//url=SelectedCountry+ callCategory(SelectedCategory);
// ====url should be ====
// selected/United_Kingdom&category=SelectedCategory

let url="selected/"+callCountry(SelectedCountry)+callCategory(SelectedCategory);
if(callCountry(SelectedCountry)==='bad')
return; // Don't Do any thing if no country selected

xhrCall(url,appendnews);
}

function appendNews(response){ // the response is the object  of news                   ///
// creating elements                                                              ///

}
function appendCountries(response){  // the response is the object of countries

}
