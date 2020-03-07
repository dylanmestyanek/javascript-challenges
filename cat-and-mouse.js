function catAndMouse(x, y, z) {
    // if z - x < y - z return cat A
    // else if z - x > y - z return cat B
    // else return mouse
    const distanceA = Math.abs(z - x)
    const distanceB = Math.abs(y - z)

    if (distanceA < distanceB) {
        return "Cat A"
    } else if (distanceA > distanceB) {
        return "Cat B"
    } else {
        return "Mouse C"
    }

}