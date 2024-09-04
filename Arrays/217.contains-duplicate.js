/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const uniqueNums = new Set(nums);

  return uniqueNums.size !== nums.length;
};
// @lc code=end

// Time Complexity: O(n) — The function needs to traverse the array once to build the set.
// Space Complexity: O(n) — The function may store up to n elements in the set.