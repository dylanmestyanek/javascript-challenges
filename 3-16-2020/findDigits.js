function findDigits(n) {
    var splitNumber = String(n).split('').map(function (v) { return +v; });
    return splitNumber.filter(function (num) { return n % num == 0; }).length;
}
;
console.log(findDigits(12));
console.log(findDigits(1012));
