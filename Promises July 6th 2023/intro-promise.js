const promiseGen = require('./promise/promise-generator');

const promise = promiseGen.returnPromise('Value', 500)
console.log(promise);

// setTimeout(() => {
//   console.log(promise);

// }, 5000)

promise.then((data) => {
  console.log(data);
  return promiseGen.returnPromise('New Promise', 500)
}).then((data) => {
  console.log(data);
  return promiseGen.returnPromise('Third Promise', 500)
}).then((data) => {
  console.log(data);
  return  promiseGen.returnPromise('Last Promise', 500)
}).then((data) => {
  console.log(data);
  // No return
}).then((data) => {
  console.log(data);
}).then((data) => {
  console.log(data);
  return "Something"
})
