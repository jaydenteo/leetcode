/*
Design an algorithm to encode a list of strings to a single string.
The encoded string is then decoded back to the original list of strings.

Please implement encode and decode methods.

Example 1:
Input: ["neet", "code", "love", "you"]
Output: ["neet", "code", "love", "you"]

Example 2:
Input: ["we", "say", ":", "yes"]
Output: ["we", "say", ":", "yes"]

Constraints:
0 <= strs.length < 100
0 <= strs[i].length < 200
strs[i] contains only UTF-8 characters.
*/

class Solution {
  /**
   * Time O(n)
   * Space O(n)
   *
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let encoded = "";

    for (let word of strs) {
      encoded += word.length + "$" + word;
    }

    return encoded;
  }

  /**
   * Time O(str.length)
   * Space O(n)
   *
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const decoded = [];
    let i = 0;

    while (i < str.length) {
      let j = i;

      while (str.charAt(j) !== "$" && j < str.length) {
        j++;
      }

      const length = parseInt(str.slice(i, j));
      i = j + 1;

      decoded.push(str.slice(i, i + length));

      i += length;
    }

    return decoded;
  }
}
