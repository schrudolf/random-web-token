const crypto = require("crypto");

module.exports = (characterSet, length) => {
  let newToken = [];
  const setLength = characterSet.length;
  if (setLength === 0) {
    throw new Error("Character set cannot be empty.");
  }
  for (let i = 0; i < length; i++) {
    let randomNumber = crypto.randomInt(setLength);
    let tokenChararacter = characterSet[randomNumber];
    newToken.push(tokenChararacter);
  }
  return newToken.join("");
};
