/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * Time O(n) to traverse prices array
 * Space O(1) to store pointers and maxProfit
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let [buy, sell, maxProfit] = [0, 1, 0];

  while (sell < prices.length) {
    if (prices[buy] < prices[sell]) {
      maxProfit = Math.max(maxProfit, prices[sell] - prices[buy]);
    } else {
      buy = sell;
    }

    sell += 1;
  }

  return maxProfit;
};
// @lc code=end
