// We check that the charCode for the provided letter falls within the uppercase range
const isUpperCase = (letter) => letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90;

/** 
 *  1. Take a word to translate (string) and a shift value (number)
 *  2. Check for validity of both values
 *  3. Declare a return string (empty)
 *  4. Loop over the word, checking each letter for case in order to shift correctly according to the charCode values
 *  5. Return the shifted string
*/
const cipher = (word, shift) => {
    if (!word || typeof word !== "string") throw new Error("You must provide a valid string to shift");
    if (!shift || isNaN(parseInt(shift))) throw new Error("The cipher shift amount must be a valid number");
    let decoded = "";
    for (let i = 0; i < word.length; i++) {
        decoded += isUpperCase(word[i])
        ? 
            String.fromCharCode((word.charCodeAt(i) + shift - 65) % 26 + 65)
        :
            String.fromCharCode((word.charCodeAt(i) + shift - 97) % 26 + 97);
    }
    return decoded;
};

module.exports = {
    cipher,
    isUpperCase
};