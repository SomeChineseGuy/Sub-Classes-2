/*
  Create a function called isBalanced
  this function will always take in a string, never a integer or boolean only a string
  the string will NEVER be empty 
  the string will always be this 
  {}{} // true 
  }{} // false
  {{{{}}}} // true
  {}{}{} // true
  }{ // false
  {}}{ // false
  { // false
  } // false
  
  What can keep track of things
  Arrays, Object, Soemthing to increment
  0
  { +1
  } -1
  if the 0 is ever -1, we stop the loop and return false


  If the str length is odd for sure it's false
  If the first item is a closing } we sure know it's false
  
  Make a variable that is a number of 0
  loop over the str
  for each item in the str you will check if it's an opening { you will do +1
    if it's } you do -1
    If the variable is every -1, stop the loop and return false
  at the end of the loop if the number is 0, return true, else return false
*/

