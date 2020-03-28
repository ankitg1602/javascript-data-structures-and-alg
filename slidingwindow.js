/* find longest unique substring in the string */
//example hellothere -> lother
 or
 //maxsubarraysum which accepts an array of integers and a numbr called n. The function should calculate the maximum sum of n consective elements inthe array


 //1st ways

 function maxSubArraySum(arr, num) {
    if(num > arr.length) {
        return null;
    }
    let max = -Infinity;
    for(let i=0;i<arr.length-num+1;i++) {
        let temp = 0;
        for(let j=0;j<num;j++) {
            temp += arr[i+j] //sum of three consuctive number and next number
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
 }

 //On2

 //refactor

 //INsliding window we will not sum of all the digit num times, we will do substract of first number and add new number

 function maxSubArraySum(arr, num) {
    if(num > arr.length) {
        return null
    }
    let maxSum = 0;
    let tempSum = 0;
    for(let i=0;i<num;i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum
    for(let i=num;i<arr.length; i++) {
        tempSum = tempSum - arr[i-num] + arr[i]  //tempsum conatin total sum of num digit, minus first digit and add current digit
        maxSum = Math.max(tempSum, maxSum)
    }
    return maxSum
 }

 maxSubArraySum([1,2,5,2,8,1,5], 2) // 10

