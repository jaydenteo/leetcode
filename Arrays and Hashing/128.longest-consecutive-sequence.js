/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * Time O(n) to traverse the hashset
 * Space O(n) for the hashset
 *
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const numSet = new Set(nums);
  let maxLength = 0;

  for (let num of numSet) {
    // Start a new sequence only if the current number is the start of the sequence
    if (!numSet.has(num - 1)) {
      let currentLength = 1;
      let nextNum = num + 1;

      // Count the length of the sequence
      while (numSet.has(nextNum)) {
        currentLength++;
        nextNum++;
      }

      // Update the maximum length if the current sequence is longer
      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
};
// @lc code=end
