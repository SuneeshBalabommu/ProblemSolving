// Date: 12/05/2025
// Problem: Sum()
// Link: https://namastedev.com/practice/sum
//Question:
//Design a function sum that take any number and return the sum of all the numbers. the function should work for both fixed and variable number of arguments using js features.
//Approach:
//1. Use the rest parameter syntax to accept a variable number of arguments.
//2. Use the reduce method to iterate through the arguments and accumulate the sum.
//3. The reduce method takes a callback function that takes two parameters: the accumulator and the current value.
//4. In the callback function, add the current value to the accumulator and return it.
//5. The initial value of the accumulator is set to 0.
//6. The time complexity of this approach is O(n) as we are iterating through the arguments once.
//7. The space complexity is O(1) as we are not using any additional data structures.


function sum(...args) {
    // Your implementation
    return args.reduce((acc,cur)=>acc+=cur,0)
}

console.log(sum(1,2,3,4));




// //Test case
// //Input: 1,2,3,4
// //Output: 10
// //For the purpose of user debugging.
// //pass your numbers in function call
// //Input: 1,2,3,4
// //Output: 10

