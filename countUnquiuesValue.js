/* count unique values which accepts a sorted array and counts the unique values in the array */

[1,1,1,2,3,3,4,4,5,6]


//1st way by using while loop
function countUniqueValues(sortedArr) {
    if (sortedArr.length === 0) {
        return 0
    } else if (sortedArr.length === 1) {
        return 1
    }
    let left = 0;
    let right = 1;
    while (right < sortedArr.length) {
        if (sortedArr[left] === sortedArr[right]) {
            right++  //if same value found then increase right value
        } else {
            left++; //increase left once
            sortedArr[left] = sortedArr[right]; //replace value with right value
            right++ //increase right value
        }
    }
    return left + 1 //left will point to unqiue number
}
i
[1,1,1,2,3,4,5]
    j

//2nd ways using for loop
function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
countUniqueValues([1,2,2,5,7,7,99])