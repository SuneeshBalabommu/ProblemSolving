// Date: 03/05/2025
// Problem: FibonacciNumber (509)
// Link: https://leetcode.com/problems/fibonacci-number/description/
//Question:
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).


// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

//Approach:
// 1. Check if n is less than 2. If it is, return n.
// 2. Initialize two variables, first and second, to 0 and 1 respectively.
// 3. Use a for loop to iterate from 2 to n.
// 4. In each iteration, calculate the next Fibonacci number by adding first and second.
// 5. Update first and second to the next Fibonacci numbers.
// 6. Return the second variable, which will hold the nth Fibonacci number.
// 7. The time complexity of this approach is O(n) and the space complexity is O(1).
var fib = function(n) {
    if(n<2)return n

    let first =0
    let second =1
    for(i=2;i<=n;i++){
        let next=first+second;
        first=second;
        second=next
    }
    return second
};

//Test case
let n = 4;
console.log("Input:", n);
console.log("Output:", fib(n));
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.