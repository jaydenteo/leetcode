/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * Time O(log(N)) because it splits the search range in half at each step
 * Space O(1)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let [l, r] = [0, nums.length - 1];

  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    if (target > nums[m]) {
      l = m + 1;
    } else if (target < nums[m]) {
      r = m - 1;
    } else {
      return m;
    }
  }

  return -1;
};
// @lc code=end
