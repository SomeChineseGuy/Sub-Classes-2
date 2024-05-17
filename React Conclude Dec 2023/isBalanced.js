/* 
  create a function called isBalanced
  the function will ALWAYS take in a string (no need to check for other values)
  the string will always be {}
  so check if the string is "balanced"
  {} = true
  }{ = false
  {{{{}}}} = true
  {}{}{} = true
  {}}{{} = false
  { = false
  } = false

  {}}}{

  If the string is length of 1 - always return false
  If the string is an odd number always return false
  
  {}
  { === +1
  } === -1
  if the count is ever -1 
  If it starts with a } always return false
*/