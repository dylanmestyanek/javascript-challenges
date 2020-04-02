function minimumDistances(a) {
    var values = {};
    for (var i = 0; i < a.length; i++) {
        if (values[a[i]]) {
            values[a[i]].count += 1;
            values[a[i]].numbers.push(a[i]);
        }
        else {
            values[a[i]] = {
                count: 0,
                numbers: []
            };
        }
    }
    console.log(values);
}
console.log(minimumDistances([7, 1, 3, 4, 1, 7]));
