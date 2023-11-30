const bcrypt = require('bcryptjs');
const plainTextPassword = "yoloswag420";

// Gen Salt
const salt = bcrypt.genSaltSync(10);
// Make a hash with my password and salt
const hashed = bcrypt.hashSync(plainTextPassword, salt);

const arr = [];

for(let i = 0; i < 100; i++) {
  // Gen Salt
  const salt = bcrypt.genSaltSync(10);
  // Make a hash with my password and salt
  const hashed = bcrypt.hashSync(plainTextPassword, salt);
  console.log(hashed);
  arr.push(hashed);
}


// Takes hash and normal password and returns true or false
console.log(bcrypt.compareSync(plainTextPassword, arr[78])); 
console.log(bcrypt.compareSync(plainTextPassword, arr[99])); 
console.log(bcrypt.compareSync(plainTextPassword, arr[1])); 
console.log(bcrypt.compareSync(plainTextPassword, arr[56])); 
console.log(bcrypt.compareSync(plainTextPassword, arr[34])); 
console.log(bcrypt.compareSync(plainTextPassword, plainTextPassword)); 