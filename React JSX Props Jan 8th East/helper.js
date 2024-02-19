const arr = [1,2,3,4,5]
const arrStr = [
  "Hello, ",
  "GoodBye, ",
  "How are you, ",
  "What time is it, "
]

// arr.forEach((item) => {
//   console.log(item);
// })

const newArr = arr.map((item) => {
  return item + 10;
})

const filteredArr = arr.filter((item) => {
  if(item % 2 === 0) {
    return item
  }
})

const obj = {
  username: "Alvin",
  id: 10,
  isHere: true
}

const values = Object.values(obj)
const keys = Object.keys(obj)
const both = Object.entries(obj)
console.log(values);
console.log(keys);
console.log(both);

keys.forEach((key) => {
  console.log(obj[key]);
})




// for( let item in arr) {

// }

// const newArr = []
// for( let item of arr) {

// }

// for(let i = 0; i < 100; i++) {

// }