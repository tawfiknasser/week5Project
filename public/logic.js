(function GenerateCountries(){
  // Generate Countries Names For the options listener
  // Put them in an array  in appendCountries

  xhrCall("/selected/GiveMeJsonHon",appendCountries);
})();


function callCategory(SelectedCategory){
  if(SelectedCategory==='bad') return "";
  return '&category='+SelectedCategory;
}

function callCountry(SelectedCountry){
  if(SelectedCountry=='bad') return "bad" ;
  // if it's more than word replace the space with ' _ '
  if(SelectedCountry.indexOf(" ")> -1 ) return addUnderscore(SelectedCountry);
  return SelectedCountry;
}

function addUnderscore(SelectedCountry){
  SelectedCountry = SelectedCountry.replace(" ", "_");
  return SelectedCountry;
}



// dis functtion adds takes discription and cuts it to fit the article file.
function cutDis(discription) {
  var str1 = "" + "...";
  var str = discription.slice(0, 88) + str1;
  return str;
}



//add listener on click take 2 values and add them to send data

var buttonGo = document.getElementById("button");
buttonGo.addEventListener("click", click);

function click() {
  var country = document.getElementById("country").value;
  var catagory = document.getElementById("catagory").value;
  sendData(country, catagory);
}
