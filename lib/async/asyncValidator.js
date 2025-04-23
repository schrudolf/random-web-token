module.exports = (baseCharset, length, token, allowedPlusCharacters) => {
  return new Promise((resolve, reject) => {
    const extraCharacters =
      typeof allowedPlusCharacters === "string" ? allowedPlusCharacters : "";
    if (length !== token.length) {
      return resolve(false);
    }
    const fullAllowedChars = baseCharset + extraCharacters;
    let uniqueTokenChars = new Set(token);
    for (const char of uniqueTokenChars) {
      if (!fullAllowedChars.includes(char)) {
        resolve(false);
        return;
      }
    }
    resolve(true);
  });
};
