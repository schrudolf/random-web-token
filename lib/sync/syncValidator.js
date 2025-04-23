module.exports = (baseCharset, length, token, allowedPlusCharacters) => {
  const extraCharacters =
    typeof allowedPlusCharacters === "string" ? allowedPlusCharacters : "";
  if (length !== token.length) {
    return false;
  }
  const fullAllowedChars = baseCharset + extraCharacters;
  let uniqueTokenChars = new Set(token);
  for (const char of uniqueTokenChars) {
    if (!fullAllowedChars.includes(char)) {
      return false;
    }
  }
  return true;
};
