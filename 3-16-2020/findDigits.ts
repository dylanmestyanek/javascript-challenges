function findDigits(n:number) : number {
    const splitNumber : number[] = String(n).split('').map(v => +v);

    return splitNumber.filter(num => n % num == 0).length;
};

console.log(findDigits(12));
console.log(findDigits(1012));