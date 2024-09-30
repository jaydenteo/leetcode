/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * Hashmap Sorting
 * Time O(nlogn) as sorting takes nlogn time
 * Space O(n) for the hashmap and array
 *
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const freqMap = new Map();

  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  return [...freqMap.keys()]
    .sort((a, b) => freqMap.get(b) - freqMap.get(a))
    .slice(0, k);
};
// @lc code=end
