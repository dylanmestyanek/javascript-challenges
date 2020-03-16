// s: an array of integers, the numbers on each of the squares of chocolate
// d: an integer, Ron's birth day
// m: an integer, Ron's birth month

function birthday(s, d, m) {
// look at array (s) and divide it into (m) chunks
// if (m) chunk that adds up to (d) increment our counter
// return the counter

    let count = 0

    for (let i = 0; i < s.length; i++){
        let segment = s.slice(i, i + m).reduce((a,b) => a + b)

        if (segment === d) {
            count++
        }
    }

    return count
}

console.log(birthday([1, 1, 1, 1, 1], 3, 2))