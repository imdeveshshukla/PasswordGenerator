const array = new Uint16Array(20);
self.crypto.getRandomValues(array);

// console.log("Your lucky numbers:");
// for (const num of array) {
//   console.log(String.fromCodePoint(num));
// }
let symbols = ['!','@','$','#','&','>','?','<'];
var passSlider = document.querySelector('#passLength');
var passLen = document.querySelector('#passLengText');
var passupperCase = document.querySelector('#passUp');
var passlowerCase = document.querySelector('#passlow');
var passNumber = document.querySelector('#passNum');
var passSym = document.querySelector('#passSymbol');
var strengthIndicator = document.querySelector('#strengthIndicator');
passSlider.addEventListener('input',handleSlider);

function handleSlider() {
  let i = passSlider.value;
  // console.log(i);
  passLen.textContent = i;
}
function getRandomNumberBtw(p,q) {
  return Math.floor((Math.random())*(q-p)+p);
}
function getRandomLowerCase() {
  return String.fromCharCode(getRandomNumberBtw(97,123));
}
function getRandomUpperCase() {
  return String.fromCharCode(getRandomNumberBtw(65,91));
}
function getRandomSymbol() {
  return symbols[getRandomNumberBtw(0,symbols.length)];
}
function findStrength(){
  let upperCase = passupperCase.checked;
  let lowerCase = passlowerCase.checked;
  let number = passNumber.checked;
  let symbol = passSym.checked;
  if(upperCase && lowerCase && number && symbol)  strengthIndicator.style = 'background-color:green';
  else if((upperCase || lowerCase) && number && symbol)  strengthIndicator.style = 'background-color:yellow';
  else  strengthIndicator.style = 'background-color:red';
}

