var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    }
    if (this.tail !== null) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  };

  list.removeHead = function() {

    var temp = this.head;
    this.head = this.head.next;
    delete temp;
    return temp.value;
  };

  list.contains = function(target) {
    if (this.head === null) {
      return false;
    }
    var temp = this.head;
    while (temp.value !== target) {
      temp = temp.next;
      if (temp === null) {
        return false;
      }
    }
    return true;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
