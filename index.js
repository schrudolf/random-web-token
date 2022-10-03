const getTypeTemplate = require("./lib/tokenTemplates/getTypeTemplate");
const getSyncToken = require("./lib/sync/genSync");
const getAsyncToken = require("./lib/async/genAsync");
const getTokenWithMyOwnCharacters = require("./lib/async/withMyOwnCharacters");
const syncValidatorTest = require("./lib/sync/syncValidator");
const asyncValidatorTest = require("./lib/async/asyncValidator");
const typeAndLengthCheck = require("./lib/errorHandlers/typeAndLengthCheck");
const validatorParametersCheck = require("./lib/errorHandlers/validatorParametersCheck");

const generator = {
  currentType: "",
  /**
   * @description Create a Token with your own characters
   *
   * @param {string} characters string Sample: "abc123" generate a token with a,b,c,1,2,3 characters
   * @param {number} length length of the token
   * @example withMyOwnCharacters("abc123", 100)
   * @returns {Promise<string>}
   */
  withMyOwnCharacters: (characters, length) => {
    this.currentType = "withMyOwnCharacters";
    const isValid = typeAndLengthCheck(characters, length, this.currentType);
    if (typeof isValid === "string") {
      throw new Error(isValid);
    } else {
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
    this.currentType = "genSync";
    const isValid = typeAndLengthCheck(type, length, this.currentType);
    if (typeof isValid === "string") {
      throw new Error(isValid);
    } else {
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
    this.currentType = "genAsync";
    const isValid = typeAndLengthCheck(type, length, this.currentType);
    if (typeof isValid === "string") {
      throw new Error(isValid);
    } else {
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
    this.currentType = "syncValidator";
    const isValid = typeAndLengthCheck(type, length, this.currentType);
    const checkValidatorPar = validatorParametersCheck(
      token,
      allowedPlusCharacters,
      this.currentType
    );
    if (typeof isValid === "string") {
      throw new Error(isValid);
    } else if (typeof checkValidatorPar === "string") {
      throw new Error(checkValidatorPar);
    } else {
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
    this.currentType = "asyncValidator";
    const isValid = typeAndLengthCheck(type, length, this.currentType);
    const checkValidatorPar = validatorParametersCheck(
      token,
      allowedPlusCharacters,
      this.currentType
    );
    if (typeof isValid === "string") {
      throw new Error(isValid);
    } else if (typeof checkValidatorPar === "string") {
      throw new Error(checkValidatorPar);
    } else {
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

module.exports = generator;
