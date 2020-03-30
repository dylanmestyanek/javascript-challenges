function repeatedString(s, n) {
    const splitStr = s.split('');
    let counter = 0;
    while (s.length < n) {
        s = s + splitStr[counter];
        if (counter === splitStr.length - 1) {
            counter = 0;
        }
        else {
            counter++;
        }
    }
    return s.split('').filter(letter => letter === 'a').length;
}
console.log(repeatedString("aba", 10));
