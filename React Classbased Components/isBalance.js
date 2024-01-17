/*
  isBalanced()
  {{}} === true
  {}}}} === false
  }{  === false
  {}{}{} === true
  {}}{{} === false
  {{{{{}}}}} === true
  {{{}}}{}{}{} === true
*/

const isBalanced = () => {
  // Length has to be even
  // First has to be {, last has to be }

  // start by checking length of str to be even
  // create obj save each and count each
  // in obj }, { == 0
  // loop through the string
  // up the count by one when we hit one
  // check first item is {, if not return false
  // at the end of the loop if both numbers are !== return false
  // 2 arrays left and right, if left is greater than right, then we know it's false
  // const startingNum = 0
  // if { startingNum === + 1
  // if } startingNum === - 1
  // if starting Num > 0 return false
}

console.log(isBalanced("{{{}}}{}{}{}"));
console.log(isBalanced("{}}{{}"));
console.log(isBalanced("}{"));
console.log(isBalanced("{{}}"));
console.log(isBalanced("{}}}}"));