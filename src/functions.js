const countryObj=require('./countryNames.json')

// should return the country Shortcut
const searchCountry = (name,Obj=countryObj) => {
  let arr = [];
  arr = Object.keys(Obj);

  for (let i = 0; i < arr.length; i++) {
    if (Obj[arr[i]] === name) return arr[i];
  }

}
// should delete __
const pureCountry=(url1)=>{
let countryName = url1.replace("_", " "); // selected/United_Kingdom&category=SelectedCategory
countryName=countryName.slice(countryName.indexOf('/')+1,countryName.indexOf("&"));
return countryName;
}

const pureCategory=(url1)=>{
  if (url1.indexOf('=') <0) return 0;
  let Category=url1.slice(url1.indexOf('=')+1);
  return Category;
}

module.exports={
  searchCountry,
  pureCountry,
  pureCategory
}
