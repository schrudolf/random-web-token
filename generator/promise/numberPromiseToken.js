const {
    onlyNumbers
} = require("../token/types");

module.exports = (rounds) => {
    return new Promise((resolve, reject) => {
        let newToken = [];
        for (let i = 0; i < rounds; i++) {
            const randomNumber = Math.floor(Math.random() * onlyNumbers.length);
            const tokenCharacter = onlyNumbers[randomNumber];
            if (i === 0 && tokenCharacter === "0") {
                newToken.push("1");
            } else {
                newToken.push(tokenCharacter);
            }

        }
        if (newToken.length === rounds) {
            return resolve(newToken.join(""));
        }
    })
}