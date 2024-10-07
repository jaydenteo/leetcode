/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
/**
 * Time O(n) as each iteration increments left or right reducing the problem size by one each time
 * Space O(1)
 *
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let [left, right] = [0, numbers.length - 1];

  while (left < right) {
    const total = numbers[left] + numbers[right];

    if (total > target) right--;
    else if (total < target) left++;
    else return [left + 1, right + 1];
  }

  return -1;
};
// @lc code=end
