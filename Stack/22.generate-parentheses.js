/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * DFS Recursive Backtracking
 *
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];

  const dfs = (currentString, open, close) => {
    if (currentString.length === n * 2) {
      result.push(currentString);
      return;
    }

    if (open < n) {
      dfs(currentString + "(", open + 1, close);
    }

    if (close < open) {
      dfs(currentString + ")", open, close + 1);
    }
  };

  dfs("", 0, 0);

  return result;
};
// @lc code=end
