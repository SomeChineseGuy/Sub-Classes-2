// const num = 5;

// const changeNum = function(number) {
//   number = 10;
//   console.log('inside of the function ', number)
// }

// console.log('Before running the function ', num);
// changeNum(num)
// console.log('After running the function ', num);

const student = {
  name: 'alice',// Inside of your RAM Memory location: 1A
  cohort: 'Feb 2025' // Inside of your RAM Memory location: 1B
}

const student2 = student;

console.log(student);
console.log(student2);

// console.log(student);
// console.log(student2);

// student2.name = 'Bob'

// console.log(student);
// console.log(student2);

// const myName = "Alvin"
// const myName2 = myName

// const changeObj = function(obj) {
//   obj.name = 'Bob';
//   console.log('Inside of the function ', obj.name);
// }

// console.log("Before the function ", student.name)
// changeObj(student)
// console.log("After the function ", student.name)


const arr = [1,2,3,4]
const arr2 = arr;
console.log(arr);
console.log(arr2);
arr2[0] = 'Alvin'
console.log(arr);
console.log(arr2);
