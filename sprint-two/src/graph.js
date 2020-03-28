

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = []; // [[1, 2], [3, 4], [2, 4]]
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes.indexOf(node) !== -1) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var idx = this.nodes.indexOf(node);
  this.nodes.splice(idx, 1);
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i].indexOf(node) !== -1) {
      this.edges.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i].indexOf(fromNode) !== -1 && this.edges[i].indexOf(toNode) !== - 1) {
      result = true;
    }
  }
  return result;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i].indexOf(fromNode) !== -1 && this.edges[i].indexOf(toNode) !== -1) {
      this.edges.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for ( var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


