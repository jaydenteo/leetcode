/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * Time O(N) to iterate through the string
 * Space O(N) to add to the stack (could be all open brackets at the worse case)
 *
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = new Map([
    ["}", "{"],
    [")", "("],
    ["]", "["],
  ]);

  const stack = [];

  for (const c of s) {
    if (map.has(c)) {
      if (map.get(c) !== stack.pop()) {
        return false;
      }
    } else {
      stack.push(c);
    }
  }

  return !stack.length;
};
// @lc code=end
