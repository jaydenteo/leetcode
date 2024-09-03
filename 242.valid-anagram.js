/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  const first = s.split("").sort().join("");
  const second = t.split("").sort().join("");

  return first === second;
};
// @lc code=end

// Time Complexity: O(n log n) — Dominated by the sorting operation for each string.
// Space Complexity: O(n) — Due to the space needed to store the split arrays.
