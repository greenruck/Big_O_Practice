/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    let total = this.root.val;

    function sumHelper(node) {
      // navigate through children
      for (let child of node.children){
        // get every value
        total += child.val;
        //check for children
        if (child.children.length > 0) {
          // run again with child as root
          sumHelper(child);
        }
      }
    }
    sumHelper(this.root);
    return total;
    
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let count = this.root.val % 2 === 0 ? 1 : 0;

    function countEvensHelper(node) {
      // navigate all children
      for (let child of node.children) {
        // check childs value for even and count
        if (child.val % 2 === 0) count ++;
        // check for children
        if (child.children.length > 0) {
          // restart with child as root
          countEvensHelper(child);
        }
      }
    }
    countEvensHelper(this.root);
    return count;

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let count = this.root.val > lowerBound ? 1 : 0;

    function countGreaterHelper(node) {
      //navigate through children
      for (let child of node.children) {
        //include child in count if value is greater than lowerBound
        if (child.val > lowerBound) count ++;
        //check for children
        if (child.children.length > 0) {
          //continue with child as root
          countEvensHelper(child);
        }
      }
    }
    countGreaterHelper(this.root);
    return count;

  }
}

module.exports = { Tree, TreeNode };
