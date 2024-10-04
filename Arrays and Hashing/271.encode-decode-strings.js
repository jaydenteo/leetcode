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
