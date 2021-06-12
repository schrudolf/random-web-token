const {
    onlyNumbers
} = require("../token/types");

module.exports = (rounds) => {
    let newToken = [];
    for (let i = 0; i < rounds; i++) {
        const number = Math.random() * onlyNumbers.length;
        const roundedNumber = Math.floor(number);
        const tokenChar = onlyNumbers[roundedNumber];
        if (i === 0 && tokenChar === "0") {
            newToken.push("1");
        } else {
            newToken.push(tokenChar);
        }

    }
    if (newToken.length === rounds) {
        return newToken.join("");
    }
}