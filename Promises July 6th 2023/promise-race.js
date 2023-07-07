const {returnPromise, returnRejectedPromise} = require('./promise/promise-generator');

const promise = returnPromise('Tacos!!', 501)
const promise2 = returnPromise('Frozen Rootbeer', 500)
const promise3 = returnPromise('Poutine', 500)

const foodOrder = [promise2, promise3, promise, returnRejectedPromise('Ice Cream', 600)];

Promise.race(foodOrder)
  .then(data => {
    console.log(data);
  })