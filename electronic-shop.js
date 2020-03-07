function getMoneySpent(keyboards, drives, b) {
    // sort keyboards and drives arrays
    // loop through keyboards and compare with drives
    keyboards = keyboards.sort();
    drives = drives.sort();
    let max = -1;
    let cost = 0;

    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            cost = keyboards[i] + drives[j]
            if (cost <= b && cost > max) {
                max = cost;
            } 
        }
    }

    // for (let i = 0; i < drives.length; i++) {
    //     for (let j = 0; j < keyboards.length; j++) {
    //         cost = drives[i] + keyboards[j]
    //         if (cost < b && cost > max) {
    //             max = cost;
    //         } 
    //     }
    // }
    return max
}