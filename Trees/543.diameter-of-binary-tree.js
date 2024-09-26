/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
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
 * Recursive DFS
 * Time O(n)
 * Space O(h)
 *
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;

  const calculateHeight = (node) => {
    // Base case
    if (node === null) return 0;

    // Recursive function
    const leftHeight = calculateHeight(node.left);
    const rightHeight = calculateHeight(node.right);

    // Combine results
    const currentDiameter = leftHeight + rightHeight;

    maxDiameter = Math.max(maxDiameter, currentDiameter);

    return 1 + Math.max(leftHeight, rightHeight);
  };

  calculateHeight(root);

  return maxDiameter;
};
// @lc code=end
