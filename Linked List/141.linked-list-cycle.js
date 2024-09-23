/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Hashset
 * Time O(n) to traverse list
 * Space O(n) to add to hashset
 *
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const visited = new Set();

  while (head) {
    if (visited.has(head)) {
      return true;
    }
    visited.add(head);
    head = head.next;
  }

  return false;
};
// @lc code=end

/**
 * Time O(n) to traverse list
 * Space O(1) to store pointers
 *
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let [fast, slow] = [head, head];

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
};
