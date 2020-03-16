function diagonalDifference(arr) {
    let leftRight = 0
    let rightLeft = 0

    for (let i = 0; i < arr[0].length; i++){
        leftRight += arr[i][i]
        console.log(i, arr.length- (i + 1))
        rightLeft += arr[i][arr.length - (i + 1)]
    }


    return Math.abs(leftRight - rightLeft)
}

console.log(diagonalDifference([[1,2,3], [4,5,6], [7,8,9]]))