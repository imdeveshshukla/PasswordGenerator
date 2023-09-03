const array = new Uint16Array(20);
self.crypto.getRandomValues(array);

// console.log("Your lucky numbers:");
// for (const num of array) {
//   console.log(String.fromCodePoint(num));
// }
let symbols = ['!','@','$','#','&','>','?','<'];
var passText = document.querySelector("#passText");
var passSlider = document.querySelector('#passLength');
var passLen = document.querySelector('#passLengText');
var passupperCase = document.querySelector('#passUp');
var passlowerCase = document.querySelector('#passlow');
var passNumber = document.querySelector('#passNum');
var passSym = document.querySelector('#passSymbol');
// var randomFunctions = [getRandomUpperCase,getRandomLowerCase,getRandomSymbol,getRandomNumberBtw];
var strengthIndicator = document.querySelector('#strengthIndicator');

passSlider.addEventListener('input',handleSlider);

function handleSlider() {
  let i = passSlider.value;
  // console.log(i);
  passLen.textContent = i;
}
function getRandomNumberBtw(p=0,q=9) {
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

function copyPass() {
  let str = passText.value;
  navigator.clipboard.writeText(str).then(() => {
    alert('Content copied to clipboard');
  },() => {
    console.error('Failed to copy');
  });
}

function generatePassword() {
  let randomFunctions = [];
  if(passupperCase.checked) randomFunctions.push(getRandomUpperCase);
  if(passlowerCase.checked) randomFunctions.push(getRandomLowerCase);
  if(passSym.checked) randomFunctions.push(getRandomSymbol);
  if(passNumber.checked) randomFunctions.push(getRandomNumberBtw);


  let password = "";
  let length = passSlider.value;
  for(let i=1;i<=length;i++)
  {
    try {
      let k = getRandomNumberBtw(0,randomFunctions.length);
      let callingFunction = randomFunctions[k];
      let ch = callingFunction();
      password = password+ch;
    } catch (error) {
      password = 'Select One Item';
    }
  }
  findStrength();
  passText.value = password;
}


//Flex1