// function plusMinus(arr) {
//     // have a variable for postive, negative, and zeros
//     // retrieve count of how frequently these values appear in the array
//     // divide these counts by the length of the array to 6 decimal places
//     const positives = arr.filter(v => v > 0).length
//     const negatives = arr.filter(v => v < 0).length
//     const zeros = arr.filter(v => v === 0).length

//     console.log(positives)
//     console.log(negatives)
//     console.log(zeros)

// }

// plusMinus([-4, 3, -9, 0, 4, 1])

// function staircase(n) {
//     for (let i = 1; i <= n; i ++){
//         console.log(' '.repeat(n - i) + '#'.repeat(i))
//     }

// }

// staircase(6)

// function timeConversion(s) {
//     let timeOfDay = s.slice(-2);
//     let hours = +s.slice(0, 2);

//     if (timeOfDay === 'PM') {
//         hours < 12 && (hours += 12)
//         return String(hours) + s.slice(2, -2)
//     } else {
//         if (hours === 12) {
//             hours = '00';
//             s = hours + s.slice(2);
//         }
//         return s.slice(0, -2)
//     }

// }

// console.log(timeConversion("12:05:45PM"))

// function gradingStudents(grades) {
//     // if grade - next multiple of 5 < 3, round up to next 5 mult
//     // else if grade < 40, return grade
//     function checkGrades(grade) {
//         if (grade < 40) {
//             console.log(grade)
//         } else {
//             let nextMultiple = Math.ceil(grade / 5) * 5
//             if (Math.abs(grade - nextMultiple) < 3) {
//                 console.log(nextMultiple)
//             } else {
//                 console.log(grade)
//             }
//         }
//     }

//     grades.map(grade => checkGrades(grade))
// }
// gradingStudents([73, 67, 38, 33])

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // s: integer, starting point of Sam's house location.
    // t: integer, ending location of Sam's house location.
    // a: integer, location of the Apple tree.
    // b: integer, location of the Orange tree.
    // apples: integer array, distances at which each apple falls from the tree.
    // oranges: integer array, distances at which each orange falls from the tree.
    
    // Take the location of the apple tree, and orange tree and add their 'fall' distance to location         value
    // Iterate over apples/oranges array and add the appropriate tree location value to each (a or b)
    // Check each value in new array, and see if any values fall in the range of s <--> t
    function countFruit(fruits) {
        let count = 0
        fruits.forEach(fruit => {
            console.log("FRUIT", fruit, "S", s, "T", t) 
            if (fruit >= s && fruit <= t) {
                count++
            }
        })

        return count
    }

    apples = apples.map(apple => apple + a)
    oranges = oranges.map(orange => orange + b)
    console.log(countFruit(apples))
    console.log(countFruit(oranges))
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])
