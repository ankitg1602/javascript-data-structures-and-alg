/* start by picking the second element inthe array
 Now compare the second element with the one before it and swap if necessary
 continue to the next element and if it is inthe incorrect order, iterate through the sorted poition (ie the left side) to place the element inthe correct place.
 Repeat until the array is sorted
 */

function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSort([2,1,9,76,4])

 