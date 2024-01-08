const arr = [1,2,3,4,5]
const arrStr = [
  "Hello, ",
  "GoodBye, ",
  "How are you, ",
  "What time is it, "
]

// map
// Take an array and runs all the item through and does something with it
// const newArr = arr.map((num) => {
//   return num += 10
// })

// const newArrStr = arrStr.map((str) => {
//   return str + "John"
// })
// console.log(newArr);
// console.log(newArrStr);
// filter
const filterArr = arr.filter((num) => {
  console.log(num);
  if(num > 3) {
    return  `<h1>Hello Everyone!</h1>`
  }
})

console.log(filterArr);