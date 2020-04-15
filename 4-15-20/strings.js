function superReducedString(s) {
    let changed = true;
    let i = 0;

    while (changed) {
        changed = false;
        if (i = s.length - 1) {
            i = 0;
        }

        if (s[i] === s[i + 1]) {
            s = s.slice(s + 2);
            changed = true;
            i++;
        } 

        if (!changed) {
            return
        }
    }

    return s
}

console.log(superReducedString("aabc"))
