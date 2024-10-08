/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * Two Pointer
 * Time O(n^2) for the nested loops
 * Space O(k) where k is the number of unique triplets found
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let [l, r] = [i + 1, nums.length - 1];

    // Similar to 2sum-ii
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];

      if (sum > 0) r--;
      else if (sum < 0) l++;
      else {
        result.push([nums[i], nums[l], nums[r]]);
        l++;
        r--;

        // Prevent duplicates
        while (l < r && nums[l] === nums[l - 1]) l++;
      }
    }
  }

  return result;
};
// @lc code=end
