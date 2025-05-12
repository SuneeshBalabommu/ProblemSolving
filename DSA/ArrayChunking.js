// Date: 12/05/2025
// Problem: Array Chunking
// Link: https://namastedev.com/practice/array-chunking
//Question:
// Write a function that splits an array (first argument) into chunks (subarrays) the length of size (second argument) and final chunk should contain remaining elements.

//Approach:
// 1. Initialize an empty array to store the result.
// 2. Use a for loop to iterate through the input array with a step size of n.
// 3. In each iteration, use the slice method to extract a chunk of size n from the input array.
// 4. Push the extracted chunk into the result array.
// 5. Return the result array containing all the chunks.
// 6. The time complexity of this approach is O(n) as we are iterating through the input array once.
// 7. The space complexity is O(n) as we are creating a new array to store the chunks.

function chunkArray(arr, n) {
    // Your implementation
    const result = []
    for (let i = 0; i < arr.length; i += n){
        result.push(arr.slice(i,i+n))
    }
    return result;
}

//Test case
//Input: [1,2,3,4], 2
//Output: [[1,2],[3,4]]
//For the purpose of user debugging.
//pass your array and chunk size in function call
console.log(chunkArray([1,2,3,4],2));
module.exports = chunkArray
