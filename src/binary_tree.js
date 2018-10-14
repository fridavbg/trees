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

  add(value) {
    if (!this.value) {
      this.value = new BinaryTree(value);
    }
    if (value <= this.value) {
      if (!this.left) {
        this.left = new BinaryTree(value);
      } else {
        this.left.add(value);
      }
    } else {
      if (!this.right) {
        this.right = new BinaryTree(value);
      } else {
        this.right.add(value);
      }
    }
  }

  // returns true or false if the value is in the tree
  contains(value) {
    if (this.value === value) {
      return true;
    } else {
      if (this.right) {
        return this.right.contains(value);
      }
      if (this.left) {
        return this.left.contains(value);
      }
    }
    return false;
  }

  // apply callback in this order: left node, current node, right node
  traverseDepthFirstInOrder(fn) {
    if (this.left) {
      this.left.traverseDepthFirstInOrder(fn);
    }
    fn(this);
    if (this.right) {
      this.right.traverseDepthFirstInOrder(fn);
    }
  }

  // apply callback from left to right across each level
  // hint: use a queue for this!
  traverseBreadthFirst(fn) {
    const queue = [this];
    while (queue.length) {
      const node = queue.shift();
      fn(node);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }  

}

module.exports = BinaryTree;
