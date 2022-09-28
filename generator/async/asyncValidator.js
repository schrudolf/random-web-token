module.exports = (type, length, token, allowedPlusCharacters) => {
    return new Promise((resolve, reject) => {
        const extraCharacters = typeof allowedPlusCharacters === "string" ? allowedPlusCharacters : "";
        if (length !== token.length) {
          return resolve(false);
        } else {
          let tokenTemplate = type + extraCharacters;
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