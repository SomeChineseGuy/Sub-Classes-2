/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/

// const twoSum = function(nums, target) {
//   // Think of edge cases
//   // if length of array is 2, solution HAS to be [0,1]
//   // x, 3 current in a loop for, 5 target
//   // x + 3 = 5
//   // 5 - 3 = x
//   // we can try using includes
//   // using a normal for loop, c-style, we can get the current idx and do something with it
//   // push to an array
//   // Think about what you need to return
//   // startingIdxNum = 0;
//   // let results = [];

//   // loop over array
//   // [11,7,15,2] 9
//   // 
//   // 9 - 7 = 2
//   // 9 - 15 = -6
//   // 9 - 2 = 7
//   // Loop over array
//   // do the check 9 - 11 = -2
//   // take target number and minus it to current item in the loop
//   // second loop, to see if any item in the loop is the results number
//   // if it does, then we are going return the idx of the current item in the first loop and the idx of the second loop



// };


const twoSum = function(nums, target) {
  const obj = {}
  for(let i = 0 ; i < nums.length; i++) {
    const difference = target - nums[i]
    if(obj[difference] !== undefined) {
      return [obj[difference], i];
    }
    obj[nums[i]] = i 
  }

}


console.log(twoSum([2,7,11,15], 9)); 
console.log(twoSum([3,2,4], 6)); 