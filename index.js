const cipher = (word, shift) => {
    if (!word || typeof word !== "string") throw new Error("You must provide a valid string to shift");
    if (!shift || isNaN(parseInt(shift))) throw new Error("The cipher shift amount must be a valid number");
    let decoded = "";
    for (let i = 0; i < word.length; i++) {
        decoded += (word[i].charCodeAt() >= 65 && word[i].charCodeAt() <= 90)
        ? 
            String.fromCharCode((word.charCodeAt(i) + shift - 65) % 26 + 65)
        :
            String.fromCharCode((word.charCodeAt(i) + shift - 97) % 26 + 97);
    }
    return decoded;
};

module.exports = cipher;