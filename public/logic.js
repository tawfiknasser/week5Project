function callCategory(SelectedCategory){
  if(SelectedCategory==='bad') return;
  return '&category='+SelectedCategory;
}

function callCountry(SelectedCountry){
  if(SelectedCountry=='bad') return "bad" ;
  return SelectedCountry;
}
