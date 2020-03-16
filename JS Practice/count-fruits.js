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
