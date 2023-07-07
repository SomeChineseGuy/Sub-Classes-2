const {returnPromise, returnRejectedPromise} = require('./promise/promise-generator');

// const promise = returnPromise('Does this work?', 200)
// const rejected = returnRejectedPromise('this is not going to work', 200)



// promise.then(data => {
//   console.log(data);
// })

returnPromise('Does this work?', 200).then((data) => {
  console.log(data);
  return returnPromise('New Promise', 500)
}).then((data) => {
  console.log(data);
  return returnRejectedPromise('this is not going to work', 200)
}).then((data) => {
  console.log(data);
  return returnPromise('Last Promise', 500)
}).then((data) => {
  console.log(data);
  // No return
}).catch(err => {
  console.log('Something is wrong with the promise of geting data from data1.txt');
  console.log(err);
})