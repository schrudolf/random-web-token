const crypto = require("crypto");

module.exports = (characterSet, length) => {
  return new Promise((resolve, reject) => {
    try {
      let newToken = [];
      const setLength = characterSet.length;
      if (setLength === 0) {
        return reject(new Error("Character set cannot be empty."));
      }
      for (let i = 0; i < length; i++) {
        let randomNumber = crypto.randomInt(setLength);
        let tokenChararacter = characterSet[randomNumber];
        newToken.push(tokenChararacter);
      }
      resolve(newToken.join(""));
    } catch (error) {
      reject(error);
    }
  });
};
