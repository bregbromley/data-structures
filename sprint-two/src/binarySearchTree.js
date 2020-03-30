var BinarySearchTree = function(value) {
  var obj = Object.create(BinarySearchTree.prototype);
  obj.value = value;
  obj.left = null;
  obj.right = null;

  return obj;
};

BinarySearchTree.prototype.insert = function (value) {
  if (value > this.value) {
    if (!this.right) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else if (value < this.value) {
    if (!this.left) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function (value) {
  var result = false;
  var helper = function(node) {
    if (node.value === value) {
      result = true;
    }
    if (node.left) {
      helper(node.left);
    }
    if (node.right) {
      helper(node.right);
    }
  };
  helper(this);
  return result;
};

BinarySearchTree.prototype.depthFirstLog = function (fn) {
  var helper = function (node) {
    fn(node.value);
    if (node.left) {
      helper(node.left);
    }
    if (node.right) {
      helper(node.right);
    }
  };
  helper(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
