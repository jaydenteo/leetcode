/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
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
 * Time O(p + q) to visit each node once
 * Space O(h) due to the height of the trees
 *
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // Base cases
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;

  // Recursive functions
  const leftEqual = isSameTree(p.left, q.left);
  const rightEqual = isSameTree(p.right, q.right);

  // Combine results
  return leftEqual && rightEqual;
};
// @lc code=end

export default isSameTree;
