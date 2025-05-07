// Date: 03/05/2025
// Problem: FizzBuzz (412)
// Link: https://leetcode.com/problems/fizz-buzz/description/
//Question:
// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
 

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

//Approach:
// 1. Initialize an empty array to store the results.
// 2. Use a for loop to iterate from 1 to n.
// 3. For each number, check if it is divisible by 3 and 5, if so, push "FizzBuzz" to the array.
// 4. If it is only divisible by 3, push "Fizz".
// 5. If it is only divisible by 5, push "Buzz".
// 6. If it is not divisible by either, push the number itself as a string.
// 7. Return the array.
// 8. The time complexity of this approach is O(n) as we are iterating through n numbers.
// 9. The space complexity is O(n) as we are storing n strings in the array.
// 10. The space complexity can be reduced to O(1) if we do not store the results in an array and just print them.
// 11. However, since the problem requires us to return an array, we will keep the space complexity as O(n).        

var fizzBuzz = function(n) {
    let res=[]
       for(let i=1;i<=n;i++){
           if(i%3==0){
               if(i%5==0)res.push("FizzBuzz")
               else res.push("Fizz")
           }else if(i%5==0 && i%3!=0) res.push("Buzz")
           else res.push(i.toString())
       }
       return res
   };
 

   //Test case
   let n = 15;
   console.log("Input:", n);
   console.log("Output:", fizzBuzz(n));
   // Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]