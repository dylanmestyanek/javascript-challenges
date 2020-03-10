function designerPdfViewer(h, word) {
    // h is an array of letter "heights"
    // word is a string

    // split word into array, convert each letter into a ascii value, and subtract 97 to get index
    // use that index to select that letter's height in `h` array
    // grab max value from new `word` array, which represents the tallest letter
    // return that max value by the word's length
    word = word.split('').map(letter => h[letter.charCodeAt() - 97])
    const maxHeight = Math.max(...word)
    return maxHeight * word.length
}