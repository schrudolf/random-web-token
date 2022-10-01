module.exports = (type, length) => {
  let newToken = [];
  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * type.length);
    let tokenChararacter = type[randomNumber];
    newToken.push(tokenChararacter);
  }
  if (newToken.length === length) {
    return newToken.join("");
  }
};