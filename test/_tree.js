const { expect } = require('chai');
const Tree = require('../src/tree');

let tree = null;

xdescribe('Tree', () => {
  beforeEach(() => {
    tree = new Tree(1);
  });
  describe('The add child method', () => {
    it('should add children to the tree', () => {
      tree.addChild(2);
      tree.addChild(3);
      tree.addChild(4);
      expect(tree.children.length).to.equal(3);
    });
  }); 
  describe('The contains method', () => {
    it('should return true if the value is in the children', () => {
      tree.addChild(2);
      expect(tree.contains(2)).to.equal(true);
    });
    it('should return false if the value is not in the children', () => {
      tree.addChild(2);
      expect(tree.contains(3)).to.equal(false);
    });
    it('should correctly detect nested grandchildren and great-grandchildren', () => {
      tree.addChild(2);
      tree.children[0].addChild(20);
      tree.children[0].children[0].addChild(200);
      expect(tree.contains(20)).to.equal(true);
      expect(tree.contains(30)).to.equal(false);
      expect(tree.contains(200)).to.equal(true);
      expect(tree.contains(300)).to.equal(false);
    });
  });
  describe('The traverse method', () => {
    it('should correctly apply the function to all children and nested children', () => {
      let test = [];
      tree.addChild(2);
      tree.children[0].addChild(20);
      tree.children[0].children[0].addChild(200);
      tree.traverse(e => test.push(e.value));
      expect(test).to.deep.equal([1, 2, 20, 200]);
    });
  }); 
});
