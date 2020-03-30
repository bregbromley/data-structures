var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];//null;  // fix me

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(data) {
  this.children.push(new Tree(data));
};

//find out where to add the child
//add an array to the children propery cointaining new tree.

treeMethods.contains = function(target) {

  var result = false;
  var checkChildList = function(node) {
    for (var i = 0; i < node.length; i++) {
      if (node[i].value === target) {
        result = true;
      }
      if (node[i].children.length > 0) {
        checkChildList(node[i].children);
      }
    }
  };
  checkChildList(this.children);
  return result;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
