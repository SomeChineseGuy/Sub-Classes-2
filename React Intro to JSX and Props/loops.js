// array.map
const num = [1,2,3,4,5];

// Map is going to create a NEW array with the same length as the array it's mapping over but all of the elements will be changed in some way

const newNum = num.map((item, idx) => {
  return item + 10;
});

// console.log(newNum);

// forEach does NOT return a new array - the way to think about it is the forEach is the same as for...of
num.forEach((item, idx) => {
  // console.log(item, idx);
})

// Filter is goign to filter out the things you don't want. Unlike map the length of this returned array will be small than the initial array. Filter will like map create a new array without effecting the initial array
const filterArray = num.filter((item, idx) => {
  return item % 2 === 0;
})

console.log(filterArray);

const obj = {
  username: 'alvin',
  num: 100,
  value: [1,2,3,4]
}

const keys = Object.keys(obj)
const values = Object.values(obj)
const entries = Object.entries(obj)
console.log(keys);
console.log(values);
console.log(entries);

<h1>HEllo world</h1>