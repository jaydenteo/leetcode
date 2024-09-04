/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
      const first = target - nums[i];

      if (numsMap.has(first)) return [numsMap.get(first), i];

      numsMap.set(nums[i], i);
  }
};
// @lc code=end

// Time O(N) | Space O(N)
// From adding to hash map