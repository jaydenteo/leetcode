/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * Using only one array
 * Time O(n) to add to result array
 * Space O(n) to store result
 * Space O(1) as according to question, output array is not counted
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = [];
  let prefix = 1; // Holds the product of all elements to the left of the current index
  let postfix = 1; // Holds the product of all elements to the right of the current index

  // Calculate the prefix products
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix; // Set result[i] to the current prefix value
    prefix *= nums[i]; // Multiply prefix by the current number for the next iteration
  }

  // Calculate the postfix products and multiply them with the prefix products
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= postfix; // Multiply the current result[i] (which contains the prefix) by the postfix
    postfix *= nums[i]; // Multiply postfix by the current number for the next iteration
  }

  return result;
};
// @lc code=end

/**
 * Using prefix and postfix arrays (easier to visualise)
 * Time O(n) to traverse arrays
 * Space O(n) for arrays
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = [];
  let prefix = new Array(nums.length).fill(1);
  let postfix = new Array(nums.length).fill(1);

  // Calculate the prefix products
  for (let i = 1; i < nums.length; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  // Calculate the postfix products
  for (let i = nums.length - 2; i >= 0; i--) {
    postfix[i] = postfix[i + 1] * nums[i + 1];
  }

  // Build the result using prefix and postfix products
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix[i] * postfix[i];
  }

  return result;
};
