function xhrCall(url, callback) {
  var myRequest = new xmlHttpRequest();
  myRequest.onreadystatechange = function() {
    if (myRequest.readyState === 4 && myRequest.status === 200) {
      var response = JSON.parse(myRequest.responseText);
       callback(response);
    }
  };
  myRequest.open("GET", url);
  myRequest.send();
}

// function callCountry(SelectedCountry,cb){
//   xhrCall('SelectedCountry/'+SelectedCountr,cb)
// }
