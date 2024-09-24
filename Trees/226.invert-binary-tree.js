/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * Time O(n) to visit each node once
 * Space O(logn) if a balanced binary tree
 * Space O(n) if a skewed binary tree
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // Base case: If the node is null, there's nothing to invert
  if (root === null) {
    return null;
  }

  // Recursive case: Invert the left and right subtrees
  invertTree(root.left);
  invertTree(root.right);

  // Combine results: Swap the left and right children
  [root.left, root.right] = [root.right, root.left];

  return root;
};
// @lc code=end
