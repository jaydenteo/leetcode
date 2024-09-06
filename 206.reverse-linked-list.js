/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let [prev, curr] = [null, head];

  while (curr) {
      let next = curr.next;
      curr.next = prev;

      prev = curr;
      curr = next;
  }

  return prev;
};
// @lc code=end

// Iterative solution
// Time O(n) to traverse linked list
// Space O(1) to store two pointers