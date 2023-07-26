const item = {
  isSleepy: true,
  myName: 'Steve',
}

const item2 = {
  ...item,
  isSleepy: !item.isSleepy
}

console.log(item);
console.log(item2);