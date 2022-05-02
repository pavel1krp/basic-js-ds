const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {
    return this.root;
  }

  add(data) {
    this.root = add(this.root, data);

    function add(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (data === node.data) {
        return node;
      }
      if (data < node.data) {
        node.left = add(node.left, data)
      } else {
        node.right = add(node.right, data)
      }
      return node;
    }
  }

  has(data) {
    return search(this.root, data);

      function search(node, data) {
        if (!node) {
          return false;
        }
        if (node.data === data) {
          return true;
        }

        return data < node.data ?
        search(node.left, data):
        search(node.right, data);
      }
    }

    remove(data) {
      this.root = removeNode(this.root, value);
      
    function removeNode( node, value){
      if(!node){
        return null;
      }
      if( value < node.value){
        node.left = removeNode(node.left, value);
        return node;
      } else if(node.value < value){
        node.right = removeNode(node.right, value);
        return node;
      } else{
        if( !node.left && !node.right){
          return null;
        }
        if(!node.left){
          node = node.right;
          return node;
        }
        let MinFromRight = node.right;
        while (MinFromRight.left){
          MinFromRight = MinFromRight.left;
        }
        node.value = MinFromRight.value;

        node.right = removeNode(node.right, MinFromRight.value);
        return node;
      }
    }
    }

    find( data) {

    }

    remove( data) {

    }

    min() {
      if (!this.root) {
        return;
      }
  
      let min = this.root;
      while (min.left) {
        min = min.left;
      }
      return min.data;
    }

    max() {
      if (!this.root) {
        return;
      }
      let max = this.root;
      while (max.left) {
        max = max.left;
      }
      return max.data;
  }
}

module.exports = {
  BinarySearchTree
};
