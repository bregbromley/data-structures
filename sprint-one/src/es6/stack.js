class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    var objArr = Object.keys(this.storage);
    this.storage[objArr.length + 1] = value;
  }

  pop() {
    var objArr = Object.keys(this.storage);
    var current = this.storage[objArr[objArr.length - 1]];
    delete this.storage[objArr[objArr.length - 1]];
    return current;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}