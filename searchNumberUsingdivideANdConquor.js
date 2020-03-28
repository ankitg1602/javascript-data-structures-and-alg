function search(arr, searchNumber) {
    for(let i=0;i<arr.length;i++) {
        if (arr[i] === searchNumber) {
            return i
        }
    }
    return -1
}

//On

//refactor by using binary search complexivity log n

function search(arr, searchNumber) {
    let min = 0;
    let max = arr.length -1;
    while(min<=max) {
        let middle = Math.floor((min + max) / 2)  
        if (arr[middle] < searchNumber) {
            min = middle+1
        } else if (arr[middle] < searchNumber) {
            max = middle -1
        } else {
            return middle
        }
    }
    return -1
}

search([1,2,3,4,5], 4)