class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    var objArr = Object.keys(this.storage);
    if (objArr.length === 0) {
      var max = 0;
    } else {
      var max = objArr[objArr.length - 1];
    }
    this.storage[Number(max) + 1] = value;
  }

  dequeue() {
    var objArr = Object.keys(this.storage);
    var current = this.storage[objArr[0]];
    delete this.storage[objArr[0]];
    return current;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}

