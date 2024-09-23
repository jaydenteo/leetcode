/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * Time O(n) to traverse the array once and build the set
 * Space O(n) as the function may store up to n elements in the set
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const uniqueNums = new Set(nums);

  return uniqueNums.size !== nums.length;
};
// @lc code=end
