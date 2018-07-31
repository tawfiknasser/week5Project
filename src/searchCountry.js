// --function that takes the Object and return
const searchCountry = (name, stringObj) => {
  stringObj = JSON.parse(stringObj);
  let arr = [];
  arr = Object.keys(stringObj);
  //console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (stringObj[arr[i]] === name) return stringObj[arr[i]];
  }
};

var obj = {
  BD: "Bangladesh",
  BE: "Belgium",
  BF: "Burkina Faso",
  BG: "Bulgaria",
  BA: "Bosnia and Herzegovina",
  BB: "Barbados",
  WF: "Wallis and Futuna",
  UG: "Uganda",
  TZ: "Tanzania",
  MY: "Malaysia",
  MX: "Mexico",
  IL: "Israel",
  FR: "France",
  IO: "British Indian Ocean Territory",
  SH: "Saint Helena",
  FI: "Finland",
  FJ: "Fiji",
  FK: "Falkland Islands",
  FM: "Micronesia",
  FO: "Faroe Islands",
  NI: "Nicaragua",
  NL: "Netherlands",
  NO: "Norway",
  NA: "Namibia",
  VU: "Vanuatu",
  NC: "New Caledonia",
  NE: "Niger",
  NF: "Norfolk Island",
  NG: "Nigeria",
  NZ: "New Zealand",
  NP: "Nepal",
  NR: "Nauru",
  NU: "Niue",
  CK: "Cook Islands",
  XK: "Kosovo",
  CI: "Ivory Coast",
  CH: "Switzerland",
  CO: "Colombia",
  CN: "China",
  CM: "Cameroon",
  CL: "Chile",
  CC: "Cocos Islands",
  CA: "Canada",
  CG: "Republic of the Congo",
  CF: "Central African Republic",
  CD: "Democratic Republic of the Congo",
  CZ: "Czech Republic",
  CY: "Cyprus",
  CX: "Christmas Island",
  CR: "Costa Rica",
  AZ: "Azerbaijan",
  IE: "Ireland",
  ID: "Indonesia",
  UA: "Ukraine",
  QA: "Qatar",
  MZ: "Mozambique"
};
searchCountry("China", JSON.stringify(obj));
