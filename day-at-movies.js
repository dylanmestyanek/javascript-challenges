function beautifulDays(i, j, k) {
    let array = []
    for (let a = i; a <= j; a++){
        array.push(a)
    }

    return array.filter(number => (Math.abs(number - +String(number).split('').reverse().join(''))) % k === 0).length
}