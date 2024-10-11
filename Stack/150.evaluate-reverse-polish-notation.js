/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
/**
 * Time O(n) to traverse the array
 * Space O(n) to store tokens in the stack
 *
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];

  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b),
  };

  for (const token of tokens) {
    if (operations[token]) {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(operations[token](a, b));
    } else {
      stack.push(Number(token));
    }
  }

  return stack.pop();
};
// @lc code=end
