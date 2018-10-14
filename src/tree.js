/* ----------------------
Note: BEFORE tackling the class below,
read the tests in the test file.
---------------------- */

class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  // adds a child into the tree
  addChild(value) {
    // push a new tree into the current tree's children
  }

  // returns true/false if the value is in the tree
  contains(value) {
    // if the tree value matches the value passed in
      // return true
    // else
      // loop through all the children
        // call the contains method located on each child (pass the value in)

    // return false if not found at all
  }

  // applies the function to each child in the tree
  traverse(fn) {}

} 

module.exports = Tree;
