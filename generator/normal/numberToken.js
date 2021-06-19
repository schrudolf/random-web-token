module.exports = (rounds) => {
    let newToken = [];
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