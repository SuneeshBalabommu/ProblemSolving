// Date: 03/05/2025
// Problem: Missing Number (268)
// Link: https://leetcode.com/problems/missing-number/description/
//Question:
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:

// Input: nums = [3,0,1]

// Output: 2

// Explanation:

// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:

// Input: nums = [0,1]

// Output: 2

// Explanation:

// n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]

// Output: 8

// Explanation:

// n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

//Approach:
// 1. Calculate the expected sum of numbers from 0 to n using the formula n*(n+1)/2.
// 2. Calculate the actual sum of numbers in the array.
// 3. The missing number is the difference between the expected sum and the actual sum.
// 4. Return the missing number.

var missingNumber = function(nums) {
    let n= nums.length
    let pSum=nums.reduce((acc,cur)=>acc+=cur,0)
    return ((n*(n+1))/2- pSum)
};
// Time Complexity: O(n)

//Test case
let nums = [3, 0, 1];
console.log("Input:", nums);
console.log("Output:", missingNumber(nums));
// Output: 2