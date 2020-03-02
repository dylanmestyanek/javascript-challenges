function plusMinus(arr) {
    // have a variable for postive, negative, and zeros
    // retrieve count of how frequently these values appear in the array
    // divide these counts by the length of the array to 6 decimal places
    const positives = arr.filter(v => v > 0).length
    const negatives = arr.filter(v => v < 0).length
    const zeros = arr.filter(v => v === 0).length

    console.log(positives)
    console.log(negatives)
    console.log(zeros)

}

plusMinus([-4, 3, -9, 0, 4, 1])