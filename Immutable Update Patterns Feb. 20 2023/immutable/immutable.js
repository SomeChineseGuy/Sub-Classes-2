// const arr = [1,2,3,4,5];
// // const num1 = arr[0];
// // const num2 = arr[1];
// const [numberandsomething1, num2, num3, num4, num5 ] = arr;

const obj = {
  username: 'joe',
  otherName: 'steve'
}

let obj2 = obj

obj2.username = 'ryan'

// // const username = obj.username
// // const otherName = obj.otherName
// const { otherName } = obj

// let nameA = 'Steve';
// let nameB = nameA;

// console.log(nameA);
// console.log(nameB);
// nameB = 'Ryan'
// console.log(nameA);
// console.log(nameB);

// string, num, boolean

// let objA = {
//   username: 'Joe',
//   num: 21,
//   isCool: true
// }

// let objB = objA;

// console.log(objA);
// console.log(objB);

// objB.username = 'Ryan';

// console.log(objA);
// console.log(objB);

// let arrA = ["joe",12, true];
// let arrB = arrA;

// console.log(arrA);
// console.log(arrB);
// arrB[0] = 'ryan'
// console.log(arrA);
// console.log(arrB);


// let objA = {
//   username: 'Joe',
//   num: 21,
//   isCool: true,
// }
// // console.log(objA);
// // console.log(objA.username);
// let objB = {
//   ...objA,
// }

// console.log(objA);

// console.log(objB);
// objB.username = 'Steve';

// console.log(objA);

// console.log(objB);


// const arrA = [1,2,3,'ryan'];
// const arrB = [...arrA];
// const arrC = [...objB]

// console.log(arrC);

// console.log(arrA);
// console.log(arrB);

// arrB[0] = 300;
// console.log(arrA);
// console.log(arrB);



let objA = {
  username: 'Joe',
  num: 21,
  isCool: true,
}

// console.log(objA);

let objB = {
  ...objA,
}

let objC = {
  username: objA.username,
  num: objA.num,
  isCool: objA.isCool
}

const arr = [1,2,3];
const arr2 = [...arr, 4,5,6];

// console.log(arr);
// console.log(arr2);

// let objB = {
//   username: 'Joe',
//   num: 21,
//   isCool: true,
//   username: 'Steve'
// }

// // objB.username = 'Ryan';

// console.log(objA);
// console.log(objB);