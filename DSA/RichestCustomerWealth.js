// Date: 04/05/2025
// Problem: Richest Customer Wealth (1672)
// Link: https://leetcode.com/problems/richest-customer-wealth/description/
//Question:
// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

 

// Example 1:

// Copy to BlackBox
// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.
// Example 2:

// Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10
// Explanation: 
// 1st customer has wealth = 6
// 2nd customer has wealth = 10 
// 3rd customer has wealth = 8
// The 2nd customer is the richest with a wealth of 10.
// Example 3:

// Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
// Output: 17

//Approach:
// 1. Initialize a variable to store the maximum wealth.
// 2. Use the map function to iterate through each row of the accounts array.
// 3. For each row, use the reduce function to calculate the sum of the elements in that row.
// 4. Compare the sum with the maximum wealth and update it if the sum is greater.
// 5. Finally, return the maximum wealth.
// 6. The time complexity of this approach is O(m*n) where m is the number of rows and n is the number of columns in the accounts array.
// 7. The space complexity is O(1) as we are using a constant amount of space to store the maximum wealth.

var maximumWealth = function(accounts) {
    let rowSums=accounts.map(row=>row.reduce((acc,cur)=>acc+cur,0))
    return rowSums.reduce((acc,cur)=>acc>cur?acc:cur,0)
};

//Test case
let accounts = [[1,2,3],[3,2,1]];
console.log("Input:", accounts);
console.log("Output:", maximumWealth(accounts));
// Output: 6