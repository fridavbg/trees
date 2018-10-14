const { expect } = require('chai');
const BinaryTree = require('../src/_tree');

let binaryTree = null;

describe('Binary Tree', () => {
  beforeEach(() => {
    binaryTree = new BinaryTree(1);
  });

  describe('The add method', () => {
    it('should add a new node from left to right', () => {
      tree.add(2);
      tree.add(3);
      tree.add(4);
      expect(tree.left.value).to.equal(2);
      expect(tree.right.value).to.equal(3);
      expect(tree.left.left.value).to.equal(4);
    });
  }); 
});
