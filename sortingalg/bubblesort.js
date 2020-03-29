/*
    start looping from with a variable called i the end of the array towards the beginning
    start an inner loop with a variable called j from the beginning until i-1
    if arr[j] is greater than arr[j+1], swap these two values
    return the sorted array
*/

// function bubbleSort(arr) {
//     for(let i=0;i<arr.length;i++) {  //here problem is we are comparing ending element too which is already sorted in next step
//         for (let j=0;j<arr.length;j++) {
//             if (arr[j] > arr[j+1] ) {
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }

function bubbleSort(arr) {
    const swap = (array, id1, id2) => {
        [array[id1], array[id2]] = [array[id2], array[id1]]
    }
    for(let i=arr.length;i>0;i--) {  
        for (let j=0;j<i-1;j++) {
            if (arr[j] > arr[j+1] ) {
                // let temp = arr[j]
                // arr[j] = arr[j+1]
                // arr[j+1] = temp
                swap(arr, j, j+1)
            }
        }
    }
    return arr
}


bubbleSort([23,12,24,23,56,25])

//if array is partially sorted then below implemenation is best

function bubbleSort(arr) {
    const swap = (array, id1, id2) => {
        [array[id1], array[id2]] = [array[id2], array[id1]]
    }
    var noSwaps;
    for(let i=arr.length;i>0;i--) {  
        noSwaps = true
        for (let j=0;j<i-1;j++) {
            if (arr[j] > arr[j+1] ) {
                // let temp = arr[j]
                // arr[j] = arr[j+1]
                // arr[j+1] = temp
                swap(arr, j, j+1)
                noSwaps = false
            }
        }
        if (noSwaps) break; 
    }
    return arr
}

bubbleSort([8,1,2,3,4,5,6,7])
