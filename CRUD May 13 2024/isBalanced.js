/* 
  Create a funciton called isBalanced
  This function will take a str only and will never get anything besides a str
  the Str will only be curly brackets
  {}{}}
  Your job is to return true of balanced and false if not
  {} // True
  }{ // False
  {{{{}}}} // True
  {}{}{} // True
  {}}{ // False
  {{{{}} // False

  Edge Case
  str length if it's odd for sure it's false
  If the first item is a } it's false
  if the last item is { it's false

  Types of question
  Array - Sort
  Find first item in array

  Tracking / Keeping track
  num = 0
  { === + 1
  } === - 1

  if the number is less than 0 at any time just return false
  if at the end the number is 0 return true else return false
*/