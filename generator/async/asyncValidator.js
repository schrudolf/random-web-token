const { normal, medium, extra } = require("../token/types");

module.exports = (type, length, token, allowedPlusCharacters) => {
    return new Promise((resolve, reject) => {
        const extraCharacters = typeof allowedPlusCharacters === "string" ? allowedPlusCharacters : "";
        if (length !== token.length) {
          return resolve(false);
        } else {
          let tokenTemplate = getTokenTemplate(type) + extraCharacters;
          let removeRepeatingLetters = Array.from(new Set(token.split(''))).toString();
          let newToken = removeRepeatingLetters.replace(/,/g, "");
          for(let i = 0; i < newToken.length; i++){
            if(!tokenTemplate.includes(newToken[i])){
              return resolve(false);
            } else if(i === (newToken.length -1)){
              return resolve(true);
            }
          }
        }
    })
}

function getTokenTemplate(type) {
    if (type === "normal") {
      return normal;
    } else if (type === "medium") {
      return medium;
    } else if (type === "extra") {
      return extra;
    } else {
      return "0123456789";
    }
  }