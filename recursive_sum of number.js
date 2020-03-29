function sum(n) {
    if (n === 1) {
            return 1
    }
    return n + sum(n-1)
}

sum(5)

function factorial(n) {
    if (n === 1) {
            return 1
    }
    return n * factorial(n-1)
}

factorial(5)