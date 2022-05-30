/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }




  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
      // Corner case. Should never be hit unless the code is
      // called on root = NULL / empty tree
      if (this.root === null) return 0;
  
    function minDepthHelper(node) {
      // Base case : Leaf Node. This accounts for height = 1.
      if (node.left === null && node.right === null) return 1;

      // If left subtree is NULL, recur for right subtree
      if (node.left === null) {
        return minDepthHelper(node.right) + 1;
      } 
      // If right subtree is NULL, recur for left subtree
      if (node.right === null) {
        return minDepthHelper(node.left) + 1;
      }

      if (node.left) {
        return minDepthHelper(node.left.left) + 1;
      }
          
    }
    
    return Math.min(minDepthHelper(this.root.left), minDepthHelper(this.root.right)) + 1;
  }
  

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    // Corner case. Should never be hit unless the code is
      // called on root = NULL / empty tree
      if (this.root === null) return 0;
    
    function maxDepthHelper(node) {
      // Base case : Leaf Node. This accounts for height = 1.
      if (node.left === null && node.right === null) return 1;

      // If left subtree is NULL, recur for right subtree
      if (node.left === null) {
        return maxDepthHelper(node.right) + 1;
      } 
      // If right subtree is NULL, recur for left subtree
      if (node.right === null) {
        return maxDepthHelper(node.left) + 1;
      }

      if (node.left) {
        return maxDepthHelper(node.left) + 1;
      }
      if (node.right) {
        return maxDepthHelper(node.right) + 1;
      }
          
    }
    
    return Math.max(maxDepthHelper(this.root.left) + 1, maxDepthHelper(this.root.right) + 1);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (this.root === null) return 0;
    let total = 0;
    function postorderTraversal(node) {
      let left = 0;
      let right = 0;

      if (node.left) {
        left = Math.max(postorderTraversal(node.left), 0);
      }
      if (node.right) {
        right = Math.max(postorderTraversal(node.right), 0);
      }
      
      total = Math.max(total, left + right + node.val);
      return Math.max(left, right) + node.val;
    }
    postorderTraversal(this.root);
    return total;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    //traverse the tree, checking if each node is greater than the lower bound
    // also check if that value is greater than or less than the previous value that met the requirements
    
    let closestValue = null;
      function traversalHelper(node) {
        if (node !== null) {
          traversalHelper(node.left);
          if (node.val > lowerBound) {
            if (closestValue === null) {
              closestValue = node.val;
            } else if(node.val < closestValue) {
              closestValue = node.val;
            }
          }
          traversalHelper(node.right);
        }
        return closestValue;
      }
    return traversalHelper(this.root)
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
