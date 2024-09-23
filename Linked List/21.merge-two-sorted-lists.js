/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * Time O(n + m) to traverse both lists
 * Auxillary Space O(1) since we're only adding pointers and working with the same nodes
 * Total Space O(n + m) if we're including the two input lists in memory
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const result = new ListNode(); // create an empty, dummy node
  let tail = result; // pointer to the tail of result listnode

  while (list1 && list2) {
    // loop until one list is exhausted
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }

    tail = tail.next;
  }

  // add any remaining nodes from either list
  tail.next = list1 || list2;

  return result.next;
};
// @lc code=end
