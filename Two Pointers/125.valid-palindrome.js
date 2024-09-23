/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * Time O(n) as the function scans the string linearly with two pointers
 * Space O(1) for variables
 *
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const lowered = s.toLowerCase();
  let [i, j] = [0, s.length - 1];

  while (i <= j) {
    while (i < j && !isAlphanumeric(lowered[i])) i++;
    while (i < j && !isAlphanumeric(lowered[j])) j--;

    if (lowered[i] !== lowered[j]) return false;

    i++;
    j--;
  }

  return true;
};
// @lc code=end

const isAlphanumeric = (c) => /^[a-z0-9]$/.test(c);
