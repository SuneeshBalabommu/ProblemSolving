// Date: 03/05/2025
// Problem: Palindrome Number (9)
// Link: https://leetcode.com/problems/palindrome-number/description/
//Question:

// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Approach: Convert the number to a string, reverse it, and check if it is equal to the original string.
 
// var isPalindrome = function(x) {
//     let op=x.toString()
//     let reverse=op.split("").reverse().join("")
//     return op===reverse

// };

// Approach: Reverse half of the number and compare it with the other half.

var isPalindrome = function(x) {
    if(x<0 || (x%10===0) && x!==0) return false
    let reversed =0
    while(x>reversed){
        reversed = reversed*10 + x%10;
        x= Math.floor(x/10)
    }

    return (x===reversed || x===Math.floor(reversed/10))

};

// Test case
let x = 121;
console.log("Input:", x);
console.log("Output:", isPalindrome(x));
// Output: true