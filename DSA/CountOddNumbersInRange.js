// Date: 03/05/2025
// Problem: Count Odd Numbers in an Interval Range (1523)
// Link: https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/description/
//Question:

// Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

 

// Example 1:

// Input: low = 3, high = 7
// Output: 3
// Explanation: The odd numbers between 3 and 7 are [3,5,7].
// Example 2:

// Input: low = 8, high = 10
// Output: 1
// Explanation: The odd numbers between 8 and 10 are [9].

//Approach:
// 1. Calculate the difference between high and low.
// 2. Divide the difference by 2 to get the count of even numbers.
// 3. If either low or high is odd, add 1 to the count to include the odd number.
// 4. Return the count of odd numbers.
// 5. The time complexity of this approach is O(1) as it only involves basic arithmetic operations.
// 6. The space complexity is O(1) as no additional space is used.

var countOdds = function(low, high) {
    return Math.floor((high-low)/2) + (low%2!==0 || high%2!==0 ? 1 : 0)
}

//Test case
let low = 3;
let high = 7;
console.log("Input:", low, high);
console.log("Output:", countOdds(low, high));
// Output: 3
// Explanation: The odd numbers between 3 and 7 are [3,5,7].
