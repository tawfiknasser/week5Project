var SelectedCountry="change later";//get element value
var SelectedCategory="change later";//get element value

function sendData(){ // on clicking GO button
  var url = "selected/" + callCountry(SelectedCountry) + callCategory(SelectedCategory);
  // it should be foe example UK   or UK&category=SelectedCategory  if category have been selected
  xhrCall(url,appendNews ); //xhrCall defined in xhr.js
};

function appendNews(){
// creating elements
}
