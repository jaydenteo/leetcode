/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * Sorting Method
 * Time O(n log n) to sort each string.
 * Space O(n) due to the space needed to store the split arrays
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const first = s.split("").sort().join("");
  const second = t.split("").sort().join("");

  return first === second;
};
// @lc code=end

/**
 * HashMap Method
 * Time O(s + t) to iterate through both strings
 * Space O(s + t) for hash maps of both s and t
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const [sCount, tCount] = [new Map(), new Map()];

  for (let i = 0; i < s.length; i++) {
    sCount.set(s[i], (sCount.get(s[i]) || 0) + 1);
    tCount.set(t[i], (tCount.get(t[i]) || 0) + 1);
  }

  for (let [key, val] of sCount) {
    if (val !== (tCount.get(key) || 0)) return false;
  }

  return true;
};
