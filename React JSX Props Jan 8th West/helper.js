const arr = [1,2,3,4,5]
let num = 0;
for(let numOfArr of arr) {
  // console.log(num, numOfArr);
  num += numOfArr
}

console.log(num);

const newNum = arr.reduce((acc, numOfArr) => {
  acc  += numOfArr
  return acc;
}, 0)

console.log(newNum);

const arrStr = [
  "Hello, ",
  "GoodBye, ",
  "How are you, ",
  "What time is it, "
]

// const obj = {
//   "0": "Hello",
//   "1": "Goodbye",
// }

const obj = {}

// for(let idx in arrStr) {
//   console.log(idx);
//   console.log(arrStr[idx]);
//   obj[idx] = arrStr[idx]
// }

// console.log(obj);

// const newObj = arrStr.reduce((obj, item, idx) => {
//   console.log(obj);
//   console.log(item);
//   console.log(idx);
//   obj[idx] = item
//   return obj
// }, {})

// console.log(newObj);



// const newArr = []
// for(let item of arr) { newArr.push(item)}
// for(let item in arr) {}
// for(let i = 0; i < 100; i++) {}

// arr.forEach((item) => {
//   console.log(item);
// })

// const newArr = arr.map((item) => {
//   return item + 10
// })
// console.log(arr);
// console.log(newArr);

// const newArrStr = arrStr.map((str) => {
//   return str + "Steve"
// })

// console.log(newArrStr);

// const obj = {
//   username: "Steve",
//   id: 10,
//   isHere: true
// }

// // for(let item in arr) {}
// const values = Object.values(obj)
// const keys = Object.keys(obj)
// const both = Object.entries(obj);
// console.log(keys);
// console.log(values);
// console.log(both);

// keys.forEach((item) =>{
//   console.log(item, obj[item]);
// })

// const filteredArr = arr.filter((item) => {
//   if(item % 2 === 0 ) {
//     return item
//   }
// })

// console.log(filteredArr);
const Header = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

Header()