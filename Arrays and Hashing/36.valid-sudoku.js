/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * Time O(1) since the looping is a constant size
 * Space O(1) since the space required is constant
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = new Array(9).fill().map(() => new Set());
  const cols = new Array(9).fill().map(() => new Set());
  const squares = new Array(9).fill().map(() => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") continue;
      if (
        rows[i].has(board[i][j]) ||
        cols[j].has(board[i][j]) ||
        squares[Math.floor(i / 3) * 3 + Math.floor(j / 3)].has(board[i][j])
      ) {
        return false;
      }

      rows[i].add(board[i][j]);
      cols[j].add(board[i][j]);
      squares[Math.floor(i / 3) * 3 + Math.floor(j / 3)].add(board[i][j]);
    }
  }
  return true;
};
// @lc code=end
