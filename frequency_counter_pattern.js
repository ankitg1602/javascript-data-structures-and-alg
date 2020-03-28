/* write a function called same whcih accepts two arrays. The function should return true if every value inthe array has its corresponding value
squared inthe second array. the frequency of values must be the same. */

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1)
    }
    return true;
}

same([1,2,3,2], [9,1,4,4])

//On2

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {}
    for(let val of arr1){
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        } 
        if(frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
            return false
        }
    }
    return true;
}

same([1,2,3,2], [9,1,4,4]) //true
 //On
