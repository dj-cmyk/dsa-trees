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
  // Depth First Search for reference
  // findDFS(val) {
  //   let toVisitStack = [this];

  //   while (toVisitStack.length) {
  //     let current = toVisitStack.pop();

  //     if (current.val === val) 
  //       return current;

  //     for (let child of current.children) 
  //       toVisitStack.push(child)
  //   }
  // }
  // Breadth First Search for reference
  // findBFS(val) {
  //   let toVisitQueue = [this];

  //   while (toVisitQueue.length) {
  //     let current = toVisitQueue.shift();

  //     if (current.val === val) 
  //       return current;

  //     for (let child of current.children) 
  //       toVisitQueue.push(child)
  //   }
  // }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0; //empty tree
    let toSumQueue = [this.root];
    let total = 0;
    while (toSumQueue.length) {
      let current = toSumQueue.shift();
      
      total += current.val;
      for (let child of current.children) 
        toSumQueue.push(child);
    }
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0; //empty tree
    let toCountQueue = [this.root];
    let count = 0;
    while (toCountQueue.length) {
      let current = toCountQueue.shift();
      if (current.val % 2 === 0) {
        count ++;
      }
      for (let child of current.children) 
        toCountQueue.push(child);
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0; //empty tree
    let toCountQueue = [this.root];
    let count = 0;
    while (toCountQueue.length) {
      let current = toCountQueue.shift();
      if (current.val > lowerBound) {
        count ++;
      }
      for (let child of current.children) 
        toCountQueue.push(child);
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
