const {
    normalToken,
    mediumToken,
    extraToken
} = require("../token/types");

module.exports = (type, rounds) => {
    let newToken = [];
    let info = {}
    if (type === "normal") {
        info.usedToken = normalToken
        info.length = normalToken.length
    }
    else if (type === "medium") {
        info.usedToken = mediumToken
        info.length = mediumToken.length
    }
    else if (type === "extra") {
        info.usedToken = extraToken
        info.length = extraToken.length
    }
    else if (type === "onlyNumbers") {
        for (let i = 0; i < rounds; i++) {
            const randomNumber = Math.floor(Math.random() * 10); //Generate 0-9 random number
            if (i === 0 && randomNumber === 0) {
                newToken.push("1");
            } else {
                newToken.push(randomNumber);
            }
    
        }
        if (newToken.length === rounds) {
            return newToken.join("");
        }
    }
    for (let i = 0; i < rounds; i++) {
        const randomNumber = Math.floor(Math.random() * info.length);
        const tokenChararacter = info.usedToken[randomNumber];
        newToken.push(tokenChararacter);
    }
    if (newToken.length === rounds) {
        return newToken.join("");
    }
}