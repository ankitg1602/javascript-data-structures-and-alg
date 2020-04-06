/**
 * in order to implemenet merge sort, it is useful to first implement a function responsible arranging elements , in an array 
 * on either side of a pivot
 * 
 * given an array, this helper function should designate an element as the pivot
 * it should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot 
 * and all values greater than the pivot are moved to the right of the pivot
 * 
 * the order of elements on either side of the pivot doesnt matter
 * the helper should do this in place, that is it should not create a new array
 * when complete, the helper should return the index of the pivot
 * 
 * pivot pseudocode
 * it will help to accept three arguments: an array, a start index and an end index(these can default to 0and the array length minus 1,respectively)
 * grab the pivot from the start ofthe array
 * store the current pivot index in a variable(this will keeep track of where the pivot should end up)
 * loop through the array from the start until the end
 *          if the pivot is greater than the current element, increment the pivot index variable and then swap the current element 
 *          with the element at the pivot index
 * swap the starting element(i.e. the pivot) with the pivot index
 * return the pivot index
 */

 function pivot(arr, start=0, end=arr.length-1) {
     const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
     }
    let pivot = arr[start];
    let swapIdx = start;
    for(let i = start+1;i<arr.length;i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx 
 }

 pivot([4,8,2,1,5,7,6,3])
 //3
 //[2,1,3,4,8,7,5]

 /**
  * Quicksort pseudocode
  * call the pivot helper onthe array
  * when the helper returns to you the updated pivot index, recursivley call the pivot helper on the subarray to the left of that index,
  *     and the subarray to the right of that index
  * your base case occurs when you consider a subarray wuth less than 2 elements
  */

  function quicksort(arr, left=0, right=arr.length-1) {
      if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        //left
        quicksort(arr, left, pivotIndex-1);
        //right
        quicksort(arr, pivotIndex+1, right);
      }
      return arr
  }

  //best O(nlogn)  avg O(nlogn)  worst o(n2)  spacecomplexivity O(logn)