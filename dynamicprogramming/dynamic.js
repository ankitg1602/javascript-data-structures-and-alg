/**
 * A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those
 * subproblems just once, and storing their solutions
 */
//memorization -- top up approach
 function fib_memo(n, memo=[]) {
    if (memo[n] !== undefined) {
        return memo[n]
    }
    if (n<=2) {
        return 1
    }
    let res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res
    return res;
 }

 //O(n)

 //tabulation -- a bottom up approach
 function fib_table(n) {
    if (n <=2) {
        return 1
    }
    let fibNums = [0,1,1]
    for(let i=3;i<=n;i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2]
    }
    return fibNums[n]
 }
   