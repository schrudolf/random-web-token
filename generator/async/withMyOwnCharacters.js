module.exports = (types, length) => {
    return new Promise((resolve, reject) => {
        let newToken = [];
        for (let i = 0; i < length; i++) {
            const randomNumber = Math.floor(Math.random() * types.length);
            const tokenChararacter = types[randomNumber];
            newToken.push(tokenChararacter);
        }
        if (newToken.length === length) {
            return resolve(newToken.join(""));
        }
    })
}