module.exports = (characters, length) => {
    return new Promise((resolve, reject) => {
        let newToken = [];
        for (let i = 0; i < length; i++) {
            const randomNumber = Math.floor(Math.random() * characters.length);
            const tokenChararacter = characters[randomNumber];
            newToken.push(tokenChararacter);
        }
        if (newToken.length === length) {
            resolve(newToken.join(""));
        }
    })
}