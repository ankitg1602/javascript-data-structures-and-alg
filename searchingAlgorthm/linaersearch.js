// js has search method such as indexOf, includes, find, findIndex using linear search

//preudocode --
/* this function accepts an array and a value
    loop through the array and check if the current array element is equal tothe value
    if it is, return the index at which the element is found
    if the value is never found, return -1 */


    function linearSearch(arr, val){
        for(let i = 0; i < arr.length; i++) {
            if (arr[i] === val) return i; 
        }
        return -1;
    }

    // linearSearch Big o O(1) Best, O(n) avg and worst