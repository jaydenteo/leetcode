/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * Time O(n) to traverse height array
 * Space O(1) to store pointers and maxArea result
 *
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let [l, r] = [0, height.length - 1];
  let maxArea = 0;

  while (l < r) {
    const area = (r - l) * Math.min(height[l], height[r]);
    maxArea = Math.max(maxArea, area);

    if (height[l] > height[r]) r--;
    else l++;
  }

  return maxArea;
};
// @lc code=end
