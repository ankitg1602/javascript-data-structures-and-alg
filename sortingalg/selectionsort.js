// will store th smallest element first opposite of bubblesort

/*
    Store the first element as the smallest value you have seen so far
    compare this item to the next item inthe array until you find a smaller number
    if a smaller number is found,designate that smaaller number to be the new "minimum" and continue until the end of the array
    if the minimum is not the value(index) you initially began with, swap the two values
    Repeat this with the next element until the array is sorted 
*/

function selectionSort(arr) {
    for(let i=0;i<arr.length;i++) {
        let lowest = i;
        for(let j=i+1;j<arr.length;j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j
            }
        }
        if (i !== lowest) {
            let temp = arr[i];
            arr[i] = arr[lowest]
            arr[lowest] = temp;
        }
    }
    return arr
}

selectionSort([34,22,10,19,17])

//selection sort is better than bubble sort as swapping i shappening only once in every loop