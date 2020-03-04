function migratoryBirds(arr) {
    // sort array 
    // count how many times a value appears
    // choose minimum value that appears the most
    let count = {}
    let max = null
    arr = arr.sort()

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in count) {
            count[arr[i]] = count[arr[i]] += 1
        } else {
            count[arr[i]] = 1
        }
    }
    
    for (let key in count){
        if (max === null) {
            max = [key, count[key]]
        } else if (count[key] > max[1]) {
            max = [key, count[key]]
        }
    }
    return max[0]
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]))