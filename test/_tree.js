const { expect } = require('chai');
const Tree = require('../src/_tree');

let tree = null;

describe('Tree', () => {
  beforeEach(() => {
    tree = new Tree(1);
  });

  describe('The add method', () => {
    it('should add a new node from left to right', () => {
      tree.add(2);
      tree.add(3);
      tree.add(4);
      expect(tree.root.left.value).to.equal(2);
      expect(tree.root.right.value).to.equal(3);
      expect(tree.root.left.left.value).to.equal(4);
    });
  }); 
});
