function callCategory(SelectedCategory){
  if(SelectedCategory==='bad') return;
  return '&category='+SelectedCategory;
}

function callCountry(SelectedCountry){
  if(SelectedCountry=='bad') return "bad" ;
  // if it's more than word replace the space with ' _ '
  return SelectedCountry;
}
