/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * Hashmap
 * Time O(n) to traverse nums array
 * Space O(n) to add to hashmap
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (numsMap.has(diff)) return [numsMap.get(diff), i];

    numsMap.set(nums[i], i);
  }
};
// @lc code=end

/**
 * Brute Force
 *
 * Time O(n^2) due to traversing nested loops
 * Space O(1)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};
