// Date: 13/05/2025
// Problem: RemoveElement
// Link:   https://leetcode.com/problems/remove-element/description/
//Question:

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int val = ...; // Value to remove
// int[] expectedNums = [...]; // The expected answer with correct length.
//                             // It is sorted with no values equaling val.

// int k = removeElement(nums, val); // Calls your implementation

// assert k == expectedNums.length;
// sort(nums, 0, k); // Sort the first k elements of nums
// for (int i = 0; i < actualLength; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

 

// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

//Approach:
// 1. Initialize a variable k to 0, which will keep track of the number of elements not equal to val.
// 2. Iterate through the input array nums using a for loop.
// 3. In each iteration, check if the current element nums[i] is not equal to val.      
// 4. If it is not equal, assign nums[k] to nums[i], effectively moving the element to the front of the array.
// 5. Increment k by 1 to keep track of the number of elements not equal to val.
// 6. After the loop, return k, which represents the number of elements not equal to val.
// 7. The time complexity of this approach is O(n) as we are iterating through the input array once.
// 8. The space complexity is O(1) as we are not using any additional data structures.

var removeElement = function(nums, val) {
    let k=0;
    for (let i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[k]=nums[i]
            k++
        }
    }
    return k;
};

//Test case
//Input: nums = [3,2,2,3], val = 3
//Output: 2, nums = [2,2,_,_]
//Explanation: Your function should return k = 2, with the first two elements of nums being 2.
//It does not matter what you leave beyond the returned k (hence they are underscores).
//For the purpose of user debugging.

//pass your array and value in function call
console.log(removeElement([3,2,2,3],3));