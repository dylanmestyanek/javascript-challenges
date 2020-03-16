function utopianTree(n) {
    let count = 0
    for (let i = 0; i <= n; i++){
        i % 2 === 0 ? count += 1 : count *= 2
    }

    return count
}