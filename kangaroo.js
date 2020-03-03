// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
// x1 is first starting point
// x2 is second starting point
// v1 is how far first kang can jump
// v2 is how far second kang can jump

// We want to increment x1 && x2 by v1 && v2 until the 'x' values equal eachother
// base case? when do we decide they won't?
    if (v1 > v2 && x2 > x1) {
        return (x2 - x1) % (v1 - v2) == 0 ? "YES" : "NO"
    } else {
        return "NO"
    }
}

console.log(kangaroo(0, 2, 5, 3))
console.log(kangaroo(0, 3, 4, 2))

// 0, 5 ==> 2, 8 ==> 4, 11
// 0, 4 ==> 3, 6 ==> 6, 8 ==> 9, 10 ==> 12, 12
