// Date: 04/05/2025
// Problem: Running Sum of 1d Array (1480)
// Link: https://leetcode.com/problems/running-sum-of-1d-array/description/
//Question:

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

// Approach:
// 1. Initialize a for loop starting from index 1 to the length of the array.
// 2. In each iteration, add the current element to the previous element.
// 3. Update the current element with the new value.
// 4. Return the modified array.
// 5. The time complexity of this approach is O(n) as we are iterating through the array once.
// 6. The space complexity is O(1) as we are modifying the input array in place and not using any additional space.
 
// var runningSum = function(nums) {
//     for (let i = 1; i < nums.length; i++) {
//         nums[i] += nums[i - 1];
//     }
//     return nums;
// };

//Approach:
// 1. Initialize a for loop starting from index 1 to the length of the array.
// 2. In each iteration, add the current element to the previous element.
// 3. Update the current element with the new value.
// 4. Return the modified array.
// 5. The time complexity of this approach is O(n) as we are iterating through the array once.
// 6. The space complexity is O(1) as we are modifying the input array in place and not using any additional space.

var runningSum = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
}


//Test case
let nums = [1,2,3,4];
console.log("Input:", nums);
console.log("Output:", runningSum(nums));
// Output: [1,3,6,10]

