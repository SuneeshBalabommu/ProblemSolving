// Date: 04/05/2025
// Problem: Number of Steps to Reduce a Number to Zero (1342)
// Link: https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/description/
//Question:
// Given an integer num, return the number of steps to reduce it to zero.

// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

 

// Example 1:

// Input: num = 14
// Output: 6
// Explanation: 
// Step 1) 14 is even; divide by 2 and obtain 7. 
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3. 
// Step 4) 3 is odd; subtract 1 and obtain 2. 
// Step 5) 2 is even; divide by 2 and obtain 1. 
// Step 6) 1 is odd; subtract 1 and obtain 0.
// Example 2:

// Input: num = 8
// Output: 4
// Explanation: 
// Step 1) 8 is even; divide by 2 and obtain 4. 
// Step 2) 4 is even; divide by 2 and obtain 2. 
// Step 3) 2 is even; divide by 2 and obtain 1. 
// Step 4) 1 is odd; subtract 1 and obtain 0.
// Example 3:

// Input: num = 123
// Output: 12

// Approach:
// 1. Initialize a variable count to 0.
// 2. Use a while loop to iterate until num is not equal to 0.
// 3. In each iteration, increment count by 1.
// 4. Check if num is even. If it is, divide it by 2.
// 5. If num is odd, subtract 1 from it.
// 6. Return the count variable.
// 7. The time complexity of this approach is O(log n) as we are dividing num by 2 in each iteration.
// 8. The space complexity is O(1) as we are using a constant amount of space.
 
var numberOfSteps = function(num) {
    let count=0
    while(num!==0){
        count+=1
        if(num%2===0){
            num=num/2;
        }else{
            num=num-1
        }
    }
    return count;
};

//Test case
let num = 14;
console.log("Input:", num);
console.log("Output:", numberOfSteps(num));
// Output: 6