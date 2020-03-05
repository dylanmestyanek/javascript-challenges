function pageCount(n, p) {
    // the book is 'n' pages long
    // we want to turn to page 'p' in the least amount of page turns

    // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    // left page / 2 === amount of page turns
    // round down right page / 2 === amount of page turns

    // last page number % 2 === 0 , left page

    const startPageTurns = Math.floor(p / 2)
    let distance = n - p
    let endPageTurns;

    if (n % 2 === 0 && distance === 1) {
        endPageTurns = 1
    } else {
        endPageTurns = Math.floor((n - p) / 2)
    }

    return Math.min(startPageTurns, endPageTurns)
}

console.log(pageCount(12, 11))