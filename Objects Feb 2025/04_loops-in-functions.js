// Loops Array - C style, for...of, while..., for...in, forEach, map, filter, includes
// Loop In Objs - for....in


const users = ['Alice', 'Jason', 'Ryan']

// for(let user in users) {
//   console.log(typeof user);
//   console.log(users[user]);
// }

const obj = {
  name1: 'Alice',
  name2: 'Jason',
  name3: 'Ryan',
  name4: 'Alvin',
  name5: 'Steve',
  name6: 'Sarah',
  name7: 'Lisa'
}

// for(let user in obj) {
//   if(obj[user] === 'Jessica') {
//     console.log(true);
//     return true
//   }
// }

const namesArr = Object.values(obj)
console.log(namesArr.includes('Lisa'));

// console.log(false);
// return false

// console.log(obj);
// // Converts Obj into Arr
// const keys = Object.keys(obj);
// const values = Object.values(obj);
// const entries = Object.entries(obj);

// console.log(keys);
// console.log(values)
// console.log(entries);



// for(let user in obj) {
//   console.log(typeof user);
//   // console.log(obj[user]);
//   console.log(`${user} : ${obj[user]}`);
// }