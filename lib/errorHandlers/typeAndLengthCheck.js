const availableTypes = [
  "normal",
  "normal+",
  "medium",
  "medium+",
  "extra",
  "onlyNumbers",
];

function typeAndLengthCheck(type, length, currentType) {
  try {
    const usedMethod = ` -> ${currentType}(type: string, length: number)`;
    if (typeof type === "undefined" || typeof length === "undefined") {
      throw new Error(`Missing parameter ${usedMethod}`);
    } else if (typeof type !== "string") {
      throw new Error(`The first parameter must be a string  ${usedMethod}`);
    } else if (typeof length !== "number") {
      throw new Error(`The second parameter must be a number  ${usedMethod}`);
    } else if (typeof length === "number" && length <= 0) {
      throw new Error(`The second parameter must be bigger number than 0`);
    } else if (
      (currentType === "genSync" ||
        currentType === "genAsync" ||
        currentType === "syncValidator" ||
        currentType === "asyncValidator") &&
      !availableTypes.includes(type)
    ) {
      throw new Error(
        `Use 'normal', 'normal+', 'medium', 'medium+', 'extra' or 'onlyNumbers' at first parameter  ${usedMethod}`
      );
    } else {
      return true;
    }
  } catch (err) {
    console.log(err);
  }
}
