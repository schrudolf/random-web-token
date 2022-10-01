const getSyncToken = require("./lib/sync/genSync");
const getAsyncToken = require("./lib/async/genAsync");
const getTokenWithMyOwnCharacters = require("./lib/async/withMyOwnCharacters");
const syncValidatorTest = require("./lib/sync/syncValidator");
const asyncValidatorTest = require("./lib/async/asyncValidator");

let methodType;
const availableTypes = [
  "normal",
  "normal+",
  "medium",
  "medium+",
  "extra",
  "onlyNumbers",
];
const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";

const generator = {
  /**
   * @description Create a Token with your own characters
   *
   * @param {string} characters string Sample: "abc123" generate a token with a,b,c,1,2,3 characters
   * @param {number} length length of the token
   * @example withMyOwnCharacters("abc123", 100)
   * @returns {Promise<string>}
   */
  withMyOwnCharacters: (characters, length) => {
    methodType = "withMyOwnCharacters";
    const isValid = validParameters(characters, length);
    if (isValid) {
      return getTokenWithMyOwnCharacters(characters, length);
    }
  },
  /**
   * @description sync token generator
   *
   * @param {string} type "normal", "normal+", "medium", "medium+", "extra" or "onlyNumbers"
   *
   * - "normal" = (a-z)
   * - "normal+" = (A-Z)
   * - "medium" = (a-z + 0-9)
   * - "medium+" = (A-Z + 0-9)
   * - "extra" = (a-Z + 0-9)
   * - "onlyNumbers" = (0-9)
   *
   * @param {number} length length of token
   * @example genSync("extra", 100)
   * @returns {string}
   */
  genSync: (type, length) => {
    methodType = "genSync";
    const isValid = validParameters(type, length);
    if (isValid) {
      let typeTemplate = getTypeTemplate(type);
      return getSyncToken(typeTemplate, length);
    }
  },
  /**
   * @description async token generator
   *
   * @param {string} type "normal", "normal+", "medium", "medium+", "extra" or "onlyNumbers"
   *
   * - "normal" = (a-z)
   * - "normal+" = (A-Z)
   * - "medium" = (a-z + 0-9)
   * - "medium+" = (A-Z + 0-9)
   * - "extra" = (a-Z + 0-9)
   * - "onlyNumbers" = (0-9)
   *
   * @param {number} length length of token
   * @example genAsync("extra", 100)
   * @returns {Promise<string>}
   */
  genAsync: (type, length) => {
    methodType = "genAsync";
    const isValid = validParameters(type, length);
    if (isValid) {
      let typeTemplate = getTypeTemplate(type);
      return getAsyncToken(typeTemplate, length);
    }
  },
  /**
   * @description sync validator for genSync() and genAsync() or other Token
   *
   * @param {string} type same type as the generated Token
   *
   * @param {number} length same length as the generated Token
   *
   * @param {string} token The received token from genSync() or genAsync()
   *
   * @param {string | undefined} allowedPlusCharacters (This is optional) extra allowed characters in string -> "!%/"
   *
   * @example syncValidator("extra", 50, token, "")
   * @returns {boolean}
   */
  syncValidator: (type, length, token, allowedPlusCharacters) => {
    methodType = "syncValidator";
    const isValid = validParameters(type, length);
    const checkValidatorPar = checkValidatorParameters(
      token,
      allowedPlusCharacters
    );
    if (isValid && checkValidatorPar) {
      let typeTemplate = getTypeTemplate(type);
      return syncValidatorTest(
        typeTemplate,
        length,
        token,
        allowedPlusCharacters
      );
    }
  },
  /**
   * @description async validator for genSync() and genAsync() or other Token
   *
   * @param {string} type same type as the generated Token
   *
   * @param {number} length same length as the generated Token
   *
   * @param {string} token The received token from genSync() or genAsync()
   *
   * @param {string | undefined} allowedPlusCharacters (This is optional) extra allowed characters in string -> "!%/"
   *
   * @example asyncValidator("extra", 50, token, "")
   * @returns {Promise<boolean>}
   */
  asyncValidator: (type, length, token, allowedPlusCharacters) => {
    methodType = "asyncValidator";
    const isValid = validParameters(type, length);
    const checkValidatorPar = checkValidatorParameters(
      token,
      allowedPlusCharacters
    );
    if (isValid && checkValidatorPar) {
      let typeTemplate = getTypeTemplate(type);
      return asyncValidatorTest(
        typeTemplate,
        length,
        token,
        allowedPlusCharacters
      );
    }
  },
};

function getTypeTemplate(type) {
  if (type === "normal") {
    return letters;
  } else if (type === "normal+") {
    return letters.toUpperCase();
  } else if (type === "medium") {
    let medium = letters + numbers;
    return medium;
  } else if (type === "medium+") {
    let mediumPlus = letters.toUpperCase() + numbers;
    return mediumPlus;
  } else if (type === "extra") {
    let extra = letters + letters.toUpperCase() + numbers;
    return extra;
  } else {
    return numbers;
  }
}

function checkValidatorParameters(token, allowedPlusCharacters) {
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

function validParameters(type, length) {
  try {
    const usedMethod = ` -> ${methodType}(type: string, length: number)`;
    if (typeof type === "undefined" || typeof length === "undefined") {
      throw new Error(`Missing parameter ${usedMethod}`);
    } else if (typeof type !== "string") {
      throw new Error(`The first parameter must be a string  ${usedMethod}`);
    } else if (typeof length !== "number") {
      throw new Error(`The second parameter must be a number  ${usedMethod}`);
    } else if (typeof length === "number" && length <= 0) {
      throw new Error(`The second parameter must be bigger number than 0`);
    } else if (
      (methodType === "genSync" ||
        methodType === "genAsync" ||
        methodType === "syncValidator" ||
        methodType === "asyncValidator") &&
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

module.exports = generator;