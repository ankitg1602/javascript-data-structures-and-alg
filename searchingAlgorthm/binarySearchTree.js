/**
 * Every parent node has at most two children
 * every node to the left of a parent node is always less than the parent
 * every node to the right of a parent node is always greater than the parent
 */

 /**
  * Create a new node
  * Starting at the root
  *     check if there is a root, if not - the root now becomes that new node
  *     if there is a root, check if the value of the new node is greater than or less than the value of the root
  *     if it is greater 
  *         check to see if there is a node to the right
  *             if there is, move to that node and repeat these steps
  *             if there  is not, add that node as the right property
  *     if it is less
  *         check to see if there is a node to the left
  *             if there is, move to that node and repeat these steps
  *             if there is not, add that node as the left property
  */

 class Node {
     constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
     }
 }

 class BinarySearchTree {
     constructor() {
         this.root = null;
     }
 }

 let tree = new BinarySearchTree();
 tree.root = new Node(10);
 tree.root.right = new Node(15);
 tree.root.left = new Node(7);
 tree.root.left.right(9)