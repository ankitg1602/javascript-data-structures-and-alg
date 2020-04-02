/*
    comparions with arrays
    lists:
    1: Donot have indexes
    2: Connected via nodes with a next pointer
    3: Random access is not allowed
    Arrays
    1: indexed in order
    2: Insertion and deletion can be expensive
    3: Can quickly be accessed at a specific index
 */

 /*pseudocode
    THis function should accept a value
    create a new node using the value passed to the function
    If there is no head property on the list, set the head and tail to be the newly created node
    otherwise set the next property on the tailto be the new node and set the tail property on the list to be the newly created node 
    increment the length by one
    */

 class Node{
     constructor(val) {
         this.value = val;
         this.next = null;
     }
 }

 class SinglyLinkedList {
     constructor() {
         this.tail = null;
         this.head = null;
         this.length = 0
     }
     push(val) {
         let newNode = new Node(val)
         if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
         } else {
             this.tail.next = newNode;  // main logic
             this.tail = newNode;
         }
         this.length++;
         return this;
     }
     traverse() {
         let current = this.head;
         while(current) {
            console.log(current.value)
            current = current.next;
         }
     }
     /*
        popping pseudocode
        if there are no nodes inthe list, return undefined
        loop through the list until you reach the tail
        set the next property of the 2nd to last node to be null
        set the tail to be 2nd to last node
        decrement the length of the list by 1
        return the value ofthe removed 
     */
     pop() {
         if (!this.head) {
            return undefined
         }
         let current = this.head;
         let newTail = current;
         while(current.next) {
            newTail = current;
            current = current.next
         } 
         this.tail = newTail
         this.tail.next = null;
         this.length--;
         if (this.length === 0) {
            this.head = null;
            this.tail = null;
         }
         return current;
    }
    /**
     * Shifting pseudocode
     * if there are no nodes, return undefined
     * store the current head property in a variable
     * set the head property to be the current head's next property
     * decrement the length by 1
     * return the value of the node removed  
     */
    shift() {
        if (!this.head) return undefined 
        let currentHead = this.head;
        this.head = currentHead.next
        this.length--;
        if (length === 0) {
            this.tail = null;
        }
        return currentHead
    }
    //means add new node in beginning
    unShift(value){
        let newNode = new Node(value)
        if (!this.head){
            this.head = newNode
            this.tail = this.head;
            
        } else {
            newNode.next = this.head;
            this.head = newNode
        }
        this.length++
        return this
    }
    /* 
      *
      retrieving a node by its position in the linked list
      THis function should accept an index
      if the index is less than zero or greater than or equal to the length og the list, return null
      loop through the list until you reach the index and return the node at that specified index
      */
     get(index) {
         if (index < 0 || index >= this.length) {
            return null
         }
         let current = this.head;
         let counter = 0;
         while(current.next) {
             if (counter !== index) {
                current = current.next;
                counter++
             } else {
                 return current.value;
             }
         }
         return current
     }
     get1(index) {
        if (index < 0 || index >= this.length) {
           return null
        }
        let current = this.head;
        let counter = 0;
        while(counter !== index) {
           current = current.next;
           counter++
        }
        return current
    }
    /**
     * set: changing the value of a node based on its position in the linked list
     * function should accept a value and an index
     * Use your get function to find the specific node
     * if the node is not found, return false
     * if the node is found, set the value of that node to be the value passed to the function and return true
     * 
     */

     set(index, val) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.value = val
            return true
        }
        return false
     }
     /**
      * Insert: Adding a node to the linked list at a specific position
      * if the index is less than zero or greater than the length,return false
      * if the index is the same as the length, push a new node to the end of the list
      * if the index is 0, unshift a new node to the start of the list
      * otherwise, using the get method, access the node at the index -1
      * set the next property on that node to be the new node
      * set the next property on the new node to be the previous next
      * increment the length
      * return true
      */
     insert(index, val){
        if (index < 0 || index > this.length) {  //invalid
            return false
        }
        if (index===this.length) { //if equal to length
            return !!this.push(val);  //converting value into boolean
        }
        if(index === 0){ // length=0
            return !!this.unShift(val)
        }
        let newNode = new Node(val)
        let prev = this.get(index-1)
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++
        return true
     }
     /**
      * removing a node from the linked list at a specific position
      * if the index is less than zero or greater than the length, return undefined
      * if the index is the same as the length -1, pop
      * if the index is 0, shift
      * otherwise, using the get method, access the node at the node -1
      * set the next property on that node to be the next of the next node
      * decrement the length
      * return the value of the node removed
      */
     remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined
        }
        if (index === 0) {
            return this.shift()
        }
        if (index === this.length - 1) {
            return this.pop();
        }
        let previousNode = this.get(index-1)
        let removed = previousNode.next;
        previousNode.next = removed.next
        this.length--
        return removed;
     }
     /**
      * Reverse: reversing the linked list in place
      * 13->27->32->71 ----> 13 <- 27 <- 32 <- 71
      * Swap the head and tail
      * create a variable called next
      * create the variable called prev
      * create a variable called node and initialize it to the head property
      * loop through the list
      * set next to be the next property on whatever node is
      * set the next property onthe node to be whatever prev is
      * set prev to be the value of the node variable
      * set the node variable to be the value of the next variable
      *  insertion O(1)
      * removal it depends..O(1) or O(n)
      * searching - O(n)
      * access - O(n)
      */
     reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for(let i=0;i<this.length;i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next
        }
        return this
    }
     print(){
         let arr = [];
         let current = this.head;
         while(current.next) {
             arr.push(current.value)
             current = current.next
         }
         console.log(arr)
     }
 }

 let list = new SinglyLinkedList()
 list.push("Hello")
 list.push("goodbye")
 list.push("!")