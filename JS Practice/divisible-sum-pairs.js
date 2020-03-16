// n: the integer length of array
// ar: an array of integers
// k: the integer to divide the pair sum by 

function divisibleSumPairs(n, k, ar) {
    // sort the array, to always satisfy the i < j relationship
    // loop through the array twice, and check if current index (i) + (j) is divisible by k
    // if true, increment counter
    // return counter
    let count = 0
    ar = ar.sort()

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                count++
            }
        }
    }

    return count
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))