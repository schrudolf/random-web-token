function validatorParametersCheck(token, allowedPlusCharacters, methodType) {
  try {
    const usedMethod = ` -> ${methodType}(type: string, length: number, token: string, allowedPlusCharacters: string | undefined)`;
    if (typeof token !== "string") {
      throw new Error(`The third parameter must be a string  ${usedMethod}`);
    } else if (
      typeof allowedPlusCharacters !== "string" &&
      typeof allowedPlusCharacters !== "undefined"
    ) {
      throw new Error(
        `The fourth parameter must be a string or undefined  ${usedMethod}`
      );
    } else {
      return true;
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = validatorParametersCheck;
