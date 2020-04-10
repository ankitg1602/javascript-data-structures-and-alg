/**
 * stack: lifo
 * the last element added to the stack will be the first element removed from the stack
 * uses: managing functions invocations, undo/redo, routing(the history object) is treated like a stack
 */

 /**
  * The function should accept a value
  * create a new node with that value
  * if there are no nodes in the stack,set the first and the last property to the newly created node
  * if there is atleast one node, create a variable that stores the current first property on the stack
  * reset the first property to be the newly created node
  * set the next property on the node to be the previously created variable
  * increment the size of the stack by 1
  */

  class Node {
      constructor(value) {
          this.value = value,
          this.next = null
      }

  }

  class Stack {
      constructor() {
          this.first = null;
          this.last = null;
          this.size = 0;
      }
      push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size
      }
      pop() {
          if (!this.first) {
            return null
          }
          let temp = this.first;
          if (this.first === this.last) {
            this.last = null
          }
          this.first = this.first.next;
          this.size--;
          return temp.value
      }
  }

  //insertion O(1)  removal O(1)  searching O(N)  access O(N)

  /**
   * stacks are the LIFO data structure where the last value is in always the first one out
   * Stacks are used to handle function invocations (the call stack), for operations like undo/redo, and for routing(remember pages
   * you have visited and go back/forward) and much more!
   * They are not a build in data structure in javascript, but are relatively simple to implement
   */

