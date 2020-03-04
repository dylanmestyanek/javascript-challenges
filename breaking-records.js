function breakingRecords(scores) {
    // loop through an array
    // save first value as max and min
    // while looping
    // if current value is greater than max, set max to that value and incremement high record
    // if current value is less than min, set min to that value and incremement low record
    // return high, low

    let max = scores[0]
    let min = scores[0]
    let low = 0
    let high = 0

    for (let i = 0; i < scores.length; i++){
        if (scores[i] > max) {
            max = scores[i]
            high += 1
        } else if (scores[i] < min) {
            min = scores[i]
            low += 1
        }
    }

    return [high, low]
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))
