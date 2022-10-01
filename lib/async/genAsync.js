module.exports = (type, length) => {
  return new Promise((resolve, reject) => {
    let newToken = [];
    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * type.length);
      const tokenChararacter = type[randomNumber];
      newToken.push(tokenChararacter);
    }
    if (newToken.length === length) {
      resolve(newToken.join(""));
    }
  });
};