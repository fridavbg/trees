/* ----------------------
Note: BEFORE tackling the class below,
read the tests in the test file.
---------------------- */

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null
  }

  // adds node to left if value is less than or equal to this.value
  // adds node to right if value is greater than node
  add(value) {}

  // returns true or false if the value is in the tree
  contains(value) {}

  // apply callback in this order: left node, current node, right node
  traverseDepthFirstInOrder(fn) {}
  }

  // apply callback from left to right across each level
  // hint: use a queue for this!
  traverseBreadthFirst(fn) {}  

}

module.exports = BinaryTree;
