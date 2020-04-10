/**
 * Radix sort is a special sorting alg that works on lists of numbers
 * It never makes  comparisons between elements
 * It exploits the fact that information about the size of a number is encoded in the number of digits
 * More digits means a bigger number
 * 
 */

 function getDigit(num, i) {
    return Math.floor(Math.abs(num)/Math.pow(10,i))%10
 }

 getDigit(7323, 2) // 3

 function digitCount(num) {
     if (num === 0) {
        return 1;
     }
     return Math.floor(Math.log10(Math.abs(num))) + 1
 }

 function mostDigits(nums) {
    let maxDigits = 0;
    for(let i=0;i<nums.length;i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
}

/**
 * pseudocode Radix sort
 * define a function that accepts list of numbers
 * figure out how many digits the largest number has
 * loop from k=0 uptothis largest number of digits
 * for each iteration of the loop
 *      create buckets for each digit(0 to 9)
 *       place each number in the corresponding bucket based on its kth digit
 * replace our existing array with values in our buckets starting with 0 and going upto 9
 * return list at the end 
 */

 function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    console.log(maxDigitCount);
    for (let k =0;k<maxDigitCount;k++) {
        let digitBuckets = Array.from({length: 10}, () => []); //creating 10 buckets containing empty array
        for(let i=0;i<nums.length;i++) {
            let digit = getDigit(nums[i], k)
            digitBuckets[digit].push(nums[i])
        }
        nums = [].concat(...digitBuckets)
    }
    return nums
 }

 //O(nk)   space complexivity: O(n+k)   n length of array   k number of digit(average)
