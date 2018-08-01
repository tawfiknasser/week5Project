function xhrCall(url, callback) {
  var myRequest = new xmlHttpRequest();
  myRequest.onreadystatechange = function() {
    if (myRequest.readyState === 4 && myRequest.status === 200) {
      var response = JSON.parse(myRequest.responseText);
      return callback(response);
    }
  };
  myRequest.open("GET", url);
  myRequest.send();
}

function callCountry(SelectedCountry){
  xhrCall()
  return ;
}

function callCategory(SelectedCategory){

}
