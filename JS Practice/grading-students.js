function gradingStudents(grades) {
    // if grade - next multiple of 5 < 3, round up to next 5 mult
    // else if grade < 40, return grade
    function checkGrades(grade) {
        if (grade < 40) {
            console.log(grade)
        } else {
            let nextMultiple = Math.ceil(grade / 5) * 5
            if (Math.abs(grade - nextMultiple) < 3) {
                console.log(nextMultiple)
            } else {
                console.log(grade)
            }
        }
    }

    grades.map(grade => checkGrades(grade))
}

gradingStudents([73, 67, 38, 33])