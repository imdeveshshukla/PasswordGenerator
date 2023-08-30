const array = new Uint16Array(20);
self.crypto.getRandomValues(array);

console.log("Your lucky numbers:");
for (const num of array) {
  console.log(String.fromCodePoint(num));
}
