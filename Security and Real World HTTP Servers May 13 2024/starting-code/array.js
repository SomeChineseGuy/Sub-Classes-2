// const arr = [1,2,3,4,5]

// // Map creates a new instance of an array
// const newArr = arr.map((item, idx) => {
//   console.log(idx);
//   return item += 10
// })

// // for Each is basically for of
// arr.forEach((item, idx) => {
//   console.log(item, idx);
// })

// // Filter 
// const filteredArr = arr.filter((item) => {
//   console.log(item %2 === 0);
//   return item % 2 === 0;
// })

// console.log(filteredArr);

// // Reduce

// "welcome to my house"
// // {
// //   w:1,
// //   e:3,
// //   l:1
// //   ...
// // }

const letterCounter = (str) => {
  const arr = str.split("")
  // const obj = {};
  // arr.forEach(item => {
  //   if(item !== " ") {
  //     // if(obj[item]) {
  //     //   obj[item] += 1
  //     // } else {
  //     //   obj[item] = 1
  //     // }
  //     obj[item] ? obj[item] += 1 : obj[item] = 1
  //   }
  // })

  const finalObj = arr.reduce((obj, item) => {
    if(item !== " ") {
      obj[item] ? obj[item] += 1 : obj[item] = 1
    }
    return obj;
  }, {})

  console.log(finalObj);
}

letterCounter("welcome to my house")

const arrNum = [10, 24, 44, 10, 99, 100, 87];

let num = 0

for(let item of arrNum) {
  num += item
}

const finalNum = arrNum.reduce((acc, item) => {
  acc += item
  return acc;
}, 0)

console.log(finalNum);
