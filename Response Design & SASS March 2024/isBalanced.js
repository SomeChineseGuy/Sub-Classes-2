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
  {}}{{} // false 0
  { // false
  } // false  
  {{ // false
  
  // this style of question is called keeping track
  // type out a solution 
  // we can use a counter

  // If the string is an odd number this will ALWAYS return false
  // If string starts with } this will ALWAYS return false
  // if the string ends with { this will always return false

  // counter = 0;
  // convert str in to array
  // loop over the array
  // if the str === { == counter += 1
  // if the str === } == counter -= 1
  // if the counter is -1 then false
  // if counter is 0 return true
  // else return false
*/