function timeConversion(s) {
    let timeOfDay = s.slice(-2);
    let hours = +s.slice(0, 2);

    if (timeOfDay === 'PM') {
        hours < 12 && (hours += 12)
        return String(hours) + s.slice(2, -2)
    } else {
        if (hours === 12) {
            hours = '00';
            s = hours + s.slice(2);
        }
        return s.slice(0, -2)
    }
}

console.log(timeConversion("12:05:45PM"))