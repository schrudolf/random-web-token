const availableTypes = [
  "normal",
  "normal+",
  "medium",
  "medium+",
  "extra",
  "onlyNumbers",
];

module.exports = (type, length, currentType) => {
  const generatorMsg = `-> ${currentType}(type: string, length: number)`
  const validatorMsg = `-> ${currentType}(type: string, length: number, token: string, allowedPlusCharacters: string | undefined)`
  const usedMethod = (currentType === "genSync" || currentType === "genAsync" || currentType === "withMyOwnCharacters") ? generatorMsg : validatorMsg;
  if (typeof type === "undefined" || typeof length === "undefined") {
    return `Missing parameter ${usedMethod}`;
  } else if (typeof type !== "string") {
    return `The first parameter must be a string ${usedMethod}`;
  } else if (typeof length !== "number") {
    return `The second parameter must be a number ${usedMethod}`;
  } else if (typeof length === "number" && length <= 0) {
    return `The second parameter must be bigger number than 0`;
  } else if (
    (currentType === "genSync" ||
      currentType === "genAsync" ||
      currentType === "syncValidator" ||
      currentType === "asyncValidator") &&
    !availableTypes.includes(type)
  ) {
    return `Use 'normal', 'normal+', 'medium', 'medium+', 'extra' or 'onlyNumbers' at first parameter ${usedMethod}`;
  } else {
    return true;
  }
};
