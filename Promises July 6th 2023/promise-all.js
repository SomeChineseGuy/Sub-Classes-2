const {returnPromise, returnRejectedPromise} = require('./promise/promise-generator');

const promise = returnPromise('Tacos!!', 1)
const promise2 = returnPromise('Frozen Rootbeer', 5)
const promise3 = returnPromise('Poutine', 2000)

const foodOrder = [promise, promise2, promise3];

Promise.all(foodOrder)
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  })
