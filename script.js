const array = new Uint16Array(20);
self.crypto.getRandomValues(array);

// console.log("Your lucky numbers:");
// for (const num of array) {
//   console.log(String.fromCodePoint(num));
// }

var passSlider = document.querySelector('#passLength');
var passLen = document.querySelector('#passLengText');
function handleSlider() {
  let i = passSlider.value;
  // console.log(i);
  passLen.textContent = i;
}
passSlider.addEventListener('input',handleSlider);
