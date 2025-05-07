// Date: 03/05/2025
// Problem: Power of Two (231)
// Link: https://leetcode.com/problems/power-of-two/description/
//Question:

// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: n = 3
// Output: false

//Approach:
// 1. Check if n is less than or equal to 0. If it is, return false.
// 2. Use a while loop to divide n by 2 until n is greater than 1.
// 3. In each iteration, check if n is odd. If it is, return false.
// 4. If n is even, divide it by 2.
// 5. If n becomes 1, return true.
// 6. The time complexity of this approach is O(log n) as we are dividing n by 2 in each iteration.
// 7. The space complexity is O(1) as we are using a constant amount of space.

var isPowerOfTwo = function(n) {
    if(n<=0)return false
    while(n>1){
        if(n%2!==0)return false
        n=n/2
    }
    return true;
};

//Test case
let n = 16;
console.log("Input:", n);
console.log("Output:", isPowerOfTwo(n));
// Output: true