function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1,2,3,4,5])
                                    

//[1].concat(collectOddValues([2,3]))
        //[].concat(collectOddValues([3]))
                //[3].concat([])
                        // []

//Note: For Arrays, use methods like slice, the spread operator, and the concat that make copies of arrays so you donot mutate them.

//Note: strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings

//Note: to make copies of objects use object.assign, or the spread operator.
 