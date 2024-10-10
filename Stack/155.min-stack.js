/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */

// @lc code=start

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 *
 * Hashmap Implementation (COMPLETELY OVER ENGINEERED -> CAN JUST USE ARRAY BELOW)
 * Time O(1)
 * Space O(1)
 *
 */
var MinStack = function () {
  this.stack = new Map();
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  const key = this.stack.size;
  const minPrev = key > 0 ? this.stack.get(key - 1)[1] : Infinity;
  this.stack.set(key, [val, Math.min(val, minPrev)]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.delete(this.stack.size - 1);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack.get(this.stack.size - 1)[0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stack.get(this.stack.size - 1)[1];
};
// @lc code=end

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 *
 * Array
 * Time O(1)
 * Space O(1)
 *
 */
var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  const minVal =
    this.minStack.length === 0
      ? val
      : Math.min(this.minStack[this.minStack.length - 1], val);
  this.minStack.push(minVal);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};
