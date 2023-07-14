const obj = {
  num: 0,
  isCompleted: false
}

console.log(obj);

const obj2 = {
  ...obj,
  num: obj.num + 1,
}

console.log(obj2);