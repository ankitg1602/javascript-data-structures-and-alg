/* anagram means rearranging of letters of another */

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }
    let frequencyCharOfStr1 = {}
    let frequencyCharOfStr2 = {}
    for(let value of str1) {
        frequencyCharOfStr1[value] = (frequencyCharOfStr1[value] || 0) + 1
    }
    for(let value of str2) {
        frequencyCharOfStr2[value] = (frequencyCharOfStr2[value] || 0) + 1
    }
    for (let key in frequencyCharOfStr1) {
        if (frequencyCharOfStr1[key] !== frequencyCharOfStr2[key]) {
            return false
        }
    }
    return true

}

validAnagram('aaz', 'zaz')  //false
validAnagram('qwerty', 'qeywrt') //true

//others ways

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }
    let lookup = {}
    for(let value of str1) {
        lookup[value] ? lookup[value] += 1 : lookup[value] = 1;
    }
    for(let value of str2) {
        if (!lookup[value]) {
            return false
        }
        if (lookup[value]) {
            lookup[value] -= 1
        }
    }
    return true
}
