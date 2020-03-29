function numberCompare(num1, num2) {
    return num1 - num2
}

[6,4,15,10].sort(numberCompare)

function comareBYLen(str1, str2) {
    return str1.length - str2.length
}

['ankit', 'ank'].sort(comareBYLen)