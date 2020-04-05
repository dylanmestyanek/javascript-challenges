function minimumDistances(a: number[]) {

    type CountValues = {
        [k: string]: number[];
    }

    const objOfIndices: CountValues = {};

    for (let i = 0; i < a.length; i++) {
        if (a[i] in objOfIndices) {
            objOfIndices[a[i]].push(i)
        } else {
            objOfIndices[a[i]] = [i]
        } 
    }

    const filteredArr = Object.values(objOfIndices).filter(arr => arr.length >= 2)
    return !filteredArr.length ? -1 : Math.min(...filteredArr.map(arr => arr.reduce((a,b) => Math.abs(a - b))))
}

console.log(minimumDistances([7, 1, 3, 4, 1, 7]))