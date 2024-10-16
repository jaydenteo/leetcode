/*
 * @lc app=leetcode id=739 lang=javascript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
/**
 * Monotonic Decreasing Stack
 * Time O(n) to traverse the temperatures
 * Space O(n) to store in the stack
 *
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = [];
  const result = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && stack[stack.length - 1][1] < temperatures[i]) {
      const [index, value] = stack.pop();
      result[index] = i - index;
    }

    stack.push([i, temperatures[i]]); // I could have just stored the indexes and compared by doing temperatures[stack[stack.length - 1]]
  }

  return result;
};
// @lc code=end

/**
 * Brute Force [FAILS BY TIME LIMIT EXCEEDED]
 * Constraint is up to 10^5 inputs so, Time O(n) will result in 10^10 which is too long.
 * We should aim for 10^8 or less in general
 *
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const result = [];

  for (let i = 0; i < temperatures.length; i++) {
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > temperatures[i]) {
        result.push(j - i);
        break;
      }
    }

    if (result.length < i + 1) result.push(0);
  }

  return result;
};
