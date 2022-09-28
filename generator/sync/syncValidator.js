module.exports = (type, length, token, allowedPlusCharacters) => {
  const extraCharacters = typeof allowedPlusCharacters === "string" ? allowedPlusCharacters : "";
  if (length !== token.length) {
    return false;
  } else {
    let tokenTemplate = type + extraCharacters;
    let removeRepeatingLetters = Array.from(new Set(token.split(''))).toString();
    let newToken = removeRepeatingLetters.replace(/,/g, "");
    for(let i = 0; i < newToken.length; i++){
      if(!tokenTemplate.includes(newToken[i])){
        return false;
      } else if(i === (newToken.length -1)){
        return true;
      }
    }
  }
};