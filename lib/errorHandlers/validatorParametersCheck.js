module.exports = (token, allowedPlusCharacters, currentType) => {
  try {
    const usedMethod = `-> ${currentType}(type: string, length: number, token: string, allowedPlusCharacters: string | undefined)`;
    if (typeof token !== "string") {
      return `The third parameter must be a string ${usedMethod}`;
    } else if (
      typeof allowedPlusCharacters !== "string" &&
      typeof allowedPlusCharacters !== "undefined"
    ) {
      return `The fourth parameter must be a string or undefined ${usedMethod}`;
    } else {
      return true;
    }
  } catch (err) {
    console.log(err);
  }
};
