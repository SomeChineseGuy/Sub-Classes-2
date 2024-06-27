const bcrypt = require('bcryptjs');
const plainTextPassowrd  = "YoloSwag420!";
// const salt = bcrypt.genSalt // promise

const arr = [];

for(let i = 1; i < 10000; i++) {
  const salt = bcrypt.genSaltSync(11);  
  const hashed = bcrypt.hashSync(plainTextPassowrd, salt)
  console.log(hashed);
  arr.push(hashed)
}

console.log(arr);

const pass1 = arr[57];
const pass2 = arr[44];
const pass3 = arr[33];
const pass4 = arr[97];
const pass5 = arr[89];
const pass6 = arr[2];

console.log(bcrypt.compareSync(plainTextPassowrd, pass1));
console.log(bcrypt.compareSync(plainTextPassowrd, pass2));
console.log(bcrypt.compareSync("I love you", pass3));
console.log(bcrypt.compareSync(plainTextPassowrd, pass4));
console.log(bcrypt.compareSync(plainTextPassowrd, pass5));
console.log(bcrypt.compareSync("Something", pass6));