/**
 * advantage of double linked list
 * revserse and delete last node
 * 
 * 
 */

 class Node{
     constructor(val){
         this.val = val;
         this.prev = null;
         this.next = null;
     }
 }

 class DoubleLinkedList {
     constructor() {
         this.length = 0;
         this.head = null;
         this.tail = null;
     }
     /**
      * create a new node with the value passed to the function
      * if the head property is null set the head and tail to be the newly created node
      * if not, set the next property on the tail to be that node
      * set the previous property on the newly created node to be the tail
      * set the tail to be the newly created node
      * increment the length
      * return the doubly linked list
      * @param val 
      */
     push(val) {
         let newNode = new Node(val)
         if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
         } else {
             this.tail.next = newNode;
             newNode.prev = this.tail
             this.tail = newNode
         }
         this.length++
         return this;
     }
     /**
      * removing a node from the end of the doubly linked list
      * If there is no head, return undefined
      * Store the current tail in a variable to return later
      * if the length is 1, set the head and tail to be null
      * update the tail to be the previous node
      * set the newTail next to null
      * decrement the length
      * return the value removed
      */
     pop() {
        if (this.length === 0) {
            return undefined
        }
        let poppedNode = this.tail;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null
        }
        this.length--;
        return poppedNode;
     }
     /**
      * Shift: shifting a node from the begining of the doubly linked list
      * if length is 0, return undefined
      * store the current head property in a variable 
      * if the length is one 1: set the head to be null 2: set the tail to be null
      * update the head to be the next of the old head
      * set the head prev property to null
      * set the old head next to null
      * decrement the length
      * return old head
      */
     shift( ){
        if (this.length === 0) {
            return undefined
        }
        let oldHead = this.head;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next
            this.head.prev = null;
            oldHead.next = null

        }
        this.length--;
        return oldHead;
     }
     /**
      * Unshift
      * Create  a new node with the value passed to the function
      * if the length is 0   1: set the head to be the new node   2: set the tail to be the new node
      * otherwise   1: set the prev property on the head of the list to be the new node
      * 2: set the next property on the new node to be the head property
      * 3: update the head to be the new node
      * increment the length
      * return the list 
      */
     unshift(val) {
        let newNode = new Node(val);
        if (this.length===0) {
            this.head = newNode;
            this.tail = newNode;           
        } else {
            this.head.prev = newNode
            newNode.next  = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;        
     }
     /**
      * Get
      * if the index is less than 0 or greater or equal to the length, return null
      * if the index is less than or equal to half the length of the list
      *      loop though the list starting from the head and loop towards the middle
      *      return the node once it is found
      * if the index  is greater than half the length of the list
      *       loop through the list starting from the tail and loop towards the middle
      *        return the node once it is found
      * 
      */
     get(index){
        if(index < 0 || index >= this.length) return null;
        var count, current;
        if(index <= this.length/2){
            count = 0;
            current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    /**
     * Set
     * create a variable which is the result of the get method at the index passed to the function
     *      if the get method returns a valid node,set the value of that node to be the value passed to the function
     *      return true
     * otherwise return false
     */
    set(index, val) {
        let foundNode = this.get(index);
        if(foundNode != null) {
            foundNode.val = val
            return true
        }
        return false
    }
    /**
     * Insert: adding a node in a doubly liked list by a certain position
     * if the index is less than zero or greater than or equal to the length return false
     * if the index is zero, unshift
     * if the index is the same as the length, push
     * use the get method to access the index -1
     * set the next and prev properties on the correct nodes to link everything together
     * increment the length
     * return true
     */
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        var newNode = new Node(val);
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next;
        
        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }
    /**
     * remove
     * if the index is less than or greater than or equal to the length return undefined
     * if the index is zero, shift
     * if the index is the same as the length -1 ,pop
     * use the get method and prev properties to remove the found node from the list
     * set next and prev to null onthe found node
     * decrement the length
     * return the removed node
     */
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        var newNode = new Node(val);
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next;
        
        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }
 }

 var list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")

/**
 * conclusion: insertion O(1)
 * removal O(1)
 * searching O(n)
 * access o(n)
 * technically searching is O(N/2) but that is still O(N)
 */
