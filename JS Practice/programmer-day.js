// THIS IS OVERKILL LMAO
// IF IT IS A LEAP YEAR THE 256TH DAY WILL BE 12/09
// OTHERWISE IT'S 13/09

// HAHAH THE ONLY EDGE CASE IS THE YEAR 1918 WHEN FEBRUARY WAS ONLY 15 DAYS LONG

function dayOfProgrammer(year) {
    // pre-1918 leap year if 1918 % 4 === 0
    // 1918+ leap is year % 400 === 0 OR year % 4 === 0 AND year % 100 !== 0
    let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let current_days = 0
    let day;
    let month;
    
    if (year < 1918) {
        if (year % 4 === 0) {
            days[1] = 29
        }
    } else if (year === 1918) {
        days[1] = 15
    } else {
        if ((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))) {
            console.log(year)
            days[1] = 29
        }
    }

    for (let i = 0; i < days.length; i++) {
        if (current_days < 256) {
            current_days += days[i]
        } else {
            day = days[i - 1] - (current_days - 256)
            month = i - 2
        }
    }

    if (month < 10) {
        month = `0${month}`
    }

    if (day < 10) {
        day = `0${day}`
    }
    
    return `${day}.${month}.${year}`
}

console.log(dayOfProgrammer(1918))
console.log(dayOfProgrammer(1920))
console.log(dayOfProgrammer(1921))
console.log(dayOfProgrammer(1954))
console.log(dayOfProgrammer(1982))
console.log(dayOfProgrammer(2000))
console.log(dayOfProgrammer(2014))
console.log(dayOfProgrammer(2005))