function sockMerchant(n, ar) {
    // n = length of ar
    // ar = contains all socks

    // [GOAL]
    // Count all the values that are the same integer
    // divide those values by 2
    // find the smallest value in the array

    let count = {}

    for (let i = 0; i < n; i++){
        if (ar[i] in count) {
            count[ar[i]] += 1
        } else {
            count[ar[i]] = 1
        }
    }

    return Object.values(count).map(value => Math.floor(value / 2)).reduce((a, b) => a + b)

}