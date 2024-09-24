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
 * Iterative (Two-Pointers)
 * Time O(n) to traverse linked list
 * Space O(1) to store two pointers
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let [prev, curr] = [null, head];

  while (curr) {
    let stub = curr.next;
    curr.next = prev;

    prev = curr;
    curr = stub;
    // [curr.next, prev, curr] = [prev, curr, curr.next]; // One line solution cool :)
  }

  return prev;
};
// @lc code=end

/**
 * Recursive
 * Time O(n) each node in linked list is visited once
 * Space O(n) recursive call stack grows as deep as the number of nodes
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // Base Case
  if (!head || !head.next) return head;

  // Recursive Case
  const reversedListHead = reverseList(head.next);

  // Combine Result
  head.next.next = head;
  head.next = null;
  return reversedListHead;
};
