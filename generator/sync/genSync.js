const { normal, medium, extra } = require("../token/types");

module.exports = (type, rounds) => {
  let newToken = [];
  let info = {
    usedToken: null,
    length: null,
  };
  if (type === "normal") {
    info.usedToken = normal;
    info.length = normal.length;
  } else if (type === "medium") {
    info.usedToken = medium;
    info.length = medium.length;
  } else if (type === "extra") {
    info.usedToken = extra;
    info.length = extra.length;
  } else if (type === "onlyNumbers") {
    for (let i = 0; i < rounds; i++) {
      let randomNumber = Math.floor(Math.random() * 10); //Generate 0-9 random number
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
  for (let i = 0; i < rounds; i++) {
    let randomNumber = Math.floor(Math.random() * info.length);
    let tokenChararacter = info.usedToken[randomNumber];
    newToken.push(tokenChararacter);
  }
  if (newToken.length === rounds) {
    return newToken.join("");
  }
};
