module.exports = (types, rounds) => {
    return new Promise((resolve, reject) => {
        let newToken = [];
        for (let i = 0; i < rounds; i++) {
            const number = Math.random() * types.length;
            const roundedNumber = Math.floor(number);
            const tokenChar = types[roundedNumber];
            newToken.push(tokenChar);
        }
        if (newToken.length === rounds) {
            return resolve(newToken.join(""));
        }
    })
}