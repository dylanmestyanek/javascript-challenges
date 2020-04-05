function minimumDistances(a) {
    var objOfIndices = {};
    for (var i = 0; i < a.length; i++) {
        if (a[i] in objOfIndices) {
            objOfIndices[a[i]].push(i);
        }
        else {
            objOfIndices[a[i]] = [i];
        }
    }
    var filteredArr = Object.values(objOfIndices).filter(function (arr) { return arr.length >= 2; });
    return !filteredArr.length ? -1 : Math.min.apply(Math, filteredArr.map(function (arr) { return arr.reduce(function (a, b) { return Math.abs(a - b); }); }));
}
console.log(minimumDistances([7, 1, 3, 4, 1, 7]));
