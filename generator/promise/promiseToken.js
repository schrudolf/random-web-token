const {
    normalToken,
    mediumToken,
    extraToken
} = require("../token/types");

module.exports = (type, rounds) => {
    return new Promise((resolve, reject) => {
        let newToken = [];
        let info = {}
        if (type === "normal") {
            info.usedToken = normalToken
            info.length = normalToken.length
        }
        if (type === "medium") {
            info.usedToken = mediumToken
            info.length = mediumToken.length
        }
        if (type === "extra") {
            info.usedToken = extraToken
            info.length = extraToken.length
        }
        for (let i = 0; i < rounds; i++) {
            const randomNumber = Math.floor(Math.random() * info.length);
            const tokenChararacter = info.usedToken[randomNumber];
            newToken.push(tokenChararacter);
        }
        if (newToken.length === rounds) {
            return resolve(newToken.join(""));
        }
    })
}