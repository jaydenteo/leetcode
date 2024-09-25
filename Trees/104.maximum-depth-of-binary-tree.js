/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
 * Recursive DFS (Inorder)
 * Time O(n) because it visits every node in the tree once
 * Space O(h) where h is the height of the tree, due to the recursive call stack
 *
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  // Base case
  if (!root) {
    return 0;
  }

  // Recursive function
  let leftSize = maxDepth(root.left);
  let rightSize = maxDepth(root.right);

  // Combine results
  return 1 + Math.max(leftSize, rightSize);
};
// @lc code=end

/**
 * Iterative DFS (Preorder)
 * Time O(n) because it visits every node in the tree once
 * Space O(h) due to the stack data structure
 *
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  const stack = [[root, 0]];
  let maxDepth = 0;

  while (stack.length) {
    let [node, depth] = stack.pop();

    maxDepth = Math.max(maxDepth, depth + 1);

    if (node.right) stack.push([node.right, depth + 1]);
    if (node.left) stack.push([node.left, depth + 1]);
  }

  return maxDepth;
};

/**
 * Iterative BFS
 * Time O(n^2) because it visits each node and shifting the queue takes O(n) time
 * Space O(w) where w is the maximum width of the tree
 *
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  const queue = [[root, 0]];
  let maxDepth = 0;

  while (queue.length) {
    let [node, depth] = queue.shift();

    maxDepth = Math.max(maxDepth, depth + 1);

    if (node.right) queue.push([node.right, depth + 1]);
    if (node.left) queue.push([node.left, depth + 1]);
  }

  return maxDepth;
};
