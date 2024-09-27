/*
 * @lc app=leetcode id=572 lang=javascript
 *
 * [572] Subtree of Another Tree
 */

import isSameTree from "./100.same-tree";

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
 * Time O(m * n), where m is the number of nodes in the main tree (root) and n is the
 * number of nodes in the subtree (subRoot), because for each node in the main tree,
 * we may need to check all nodes in the subtree.
 * Space O(h) due to the recursion call stack
 *
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  // Base cases
  if (!subRoot) return true;
  if (!root) return false; // if root is null and subRoot is not, it can't be a subtree

  // Recursive functions
  if (isSameTree(root, subRoot)) return true;
  const leftMatches = isSubtree(root.left, subRoot);
  const rightMatches = isSubtree(root.right, subRoot);

  // Combine results
  return leftMatches || rightMatches;
};
// @lc code=end
