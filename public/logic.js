
function callCategory(SelectedCategory){
  if(SelectedCategory==='bad') return;
  return '&category='+SelectedCategory;
}

function callCountry(SelectedCountry){
  if(SelectedCountry=='bad') return "bad" ;
  // if it's more than word replace the space with ' _ '
  return SelectedCountry;
}

function cutDis(discription) {
  var str1 = "" + "...";
  var str = discription.slice(0, 78) + str1;
  console.log(str);
  return str;
}
cutDis(
  "hello my mname is noor abu a7mad and i want to know if dis func is working jbdijbogkbi hoisdh "
);
// dis functtion adds takes discription and cuts it to fit the article file.

//add listener on click take 2 values and add them to send data

var buttonGo = document.getElementById("button");
buttonGo.addEventListener("click", click);

function click() {
  var country = document.getElementById("country").value;
  var catagory = document.getElementById("catagory").value;
  console.log(country);
  console.log(catagory);
  sendData(country, catagory);
}