module.exports = (types, rounds) => {
    return new Promise((resolve, reject) => {
        let newToken = [];
        for (let i = 0; i < rounds; i++) {
            const randomNumber = Math.floor(Math.random() * types.length);
            const tokenChararacter = types[randomNumber];
            newToken.push(tokenChararacter);
        }
        if (newToken.length === rounds) {
            return resolve(newToken.join(""));
        }
    })
}