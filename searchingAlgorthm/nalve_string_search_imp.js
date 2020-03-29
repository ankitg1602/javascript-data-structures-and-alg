/*
 Loop over the longer string
 Loop over the shorter string
 If the characters donot match, break out of the inner loop
 if the characters do match, keep going
 if you complete the inner loop and find a match, increment the count of matches
 return the count */

 function naiveSearch(long,short) {
     let counter = 0
    for(let i=0;i<long.length;i++) {
        for(let j=0;j<short.length;j++) {
            if (long[i+j] !== short[j]) {  //comparing each char
                break;
            }
            if (j === short.length-1) {
                counter++
            }

        }
    }
    return counter
 }

 naiveSearch('lorie loled', 'lol')  //1

 //remember that arr[i+j] will increase as per j value