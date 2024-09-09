/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * n -> number of words
 * k -> average length of each word
 * Time O(n * k)
 * Space O(n * k) to store each word and its frequency key
 * 
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const anagramGroups = new Map();

  for (let word of strs) { // O(n) time
      const charFrequencies = new Array(26).fill(0); // O(k) time

      for (let char of word) {
          charFrequencies[char.charCodeAt(0) - "a".charCodeAt(0)]++; // O(k) time
      }

      const frequencyKey = charFrequencies.toString(); // O(k) time

      if (!anagramGroups.has(frequencyKey)) {
        anagramGroups.set(frequencyKey, []);
      }
      anagramGroups.get(frequencyKey).push(word);
    
  }

  return [...anagramGroups.values()];
};
// @lc code=end


/**
 * Time O(n * k * logk)
 * Space O(n * k)
 * 
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const anagramGroups = new Map();

  for (const word of strs) { // O(n) time
      // Convert word to a frequency-based key O(k * logk)
      const sortedWord = word.split('').sort().join('');
      
      // Get the existing group or create a new one
      if (!anagramGroups.has(sortedWord)) {
          anagramGroups.set(sortedWord, []);
      }
      anagramGroups.get(sortedWord).push(word);
  }

  // Return all groups of anagrams
  return [...anagramGroups.values()];
};