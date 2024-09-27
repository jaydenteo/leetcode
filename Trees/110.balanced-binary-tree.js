/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Time O(n) since each node is visited once
 * Space O(h) due to recursive stack
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  let isBalanced = true;

  const dfs = (root) => {
    // Base case
    if (!root) return 0;

    // Recursive
    const leftHeight = dfs(root.left);
    const rightHeight = dfs(root.right);

    // Combine results
    if (Math.abs(leftHeight - rightHeight) > 1) isBalanced = false;

    return 1 + Math.max(leftHeight, rightHeight);
  };

  dfs(root);
  return isBalanced;
};
// @lc code=end
