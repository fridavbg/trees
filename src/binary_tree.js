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

  // adds new node, from left to right
  add(value) {
  }

  // returns the node that matches the value
  findValue(value) {}

  // apply callback in this order: left node, current node, right node
  traverseDepthFirstInOrder() {}

  // apply callback in this order: current node, left node, right node
  traverseDepthFirstPreOrder() {}  

  // apply callback in this order: right node, current node, left node
  traverseDepthFirstPostOrder() {}

}

module.exports = BinaryTree;
