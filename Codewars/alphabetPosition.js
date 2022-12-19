function alphabetPosition(text) {
    alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    formattedText = text.replace(/[^a-z0-9]/gmi, " ").replace(/\s+/g, "").toLowerCase();
    textAsNumbersArray = []
    for (i = 0; i < formattedText.length; i++) {
        if (alphabetArray.indexOf(formattedText[i])+1 != 0) {
            textAsNumbersArray.push(alphabetArray.indexOf(formattedText[i])+1);
        }
    }
    return textAsNumbersArray.toString().replace(/[^a-z0-9]/gmi, " ");
}

console.log(alphabetPosition("The narwhal bacons at midnight."));