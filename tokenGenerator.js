const getSyncToken = require("./generator/sync/genSync");
const getAsyncToken = require("./generator/async/genAsync");
const getTokenWithMyOwnCharacters = require("./generator/async/withMyOwnCharacters");
const syncValidatorTest = require("./generator/sync/syncValidator");
const asyncValidatorTest = require("./generator/async/asyncValidator");

class Generator {
  #methodType;
  #availableTypes = ["normal", "medium", "extra", "onlyNumbers"];
  #letters = "abcdefghijklmnopqrstuvwxyz";
  #numbers = "0123456789";
  /**
   * @description Create a Token with your own characters
   *
   * @param {string} characters string Sample: "abc123" generate a token with a,b,c,1,2,3 characters
   * @param {number} length length of the token
   * @example withMyOwnCharacters("abc123", 100)
   * @returns {Promise<string>}
   */
  withMyOwnCharacters(characters, length) {
    this.#methodType = "withMyOwnCharacters";
    const isValid = this.#validParameters(characters, length);
    if (isValid) {
      return getTokenWithMyOwnCharacters(characters, length);
    }
  }
  /**
   * @description sync token generator
   *
   * @param {string} type "normal", "medium", "extra" or "onlyNumbers"
   *
   * - "normal" = (a-z)
   * - "medium" = (a-z + 0-9)
   * - "extra" = (a-Z + 0-9)
   * - "onlyNumbers" = (0-9)
   *
   * @param {number} length length of token
   * @example genSync("extra", 100)
   * @returns {string} a string
   */
  genSync(type, length) {
    this.#methodType = "genSync";
    const isValid = this.#validParameters(type, length);
    if (isValid) {
      let typeTemplate = this.#getTypeTemplate(type);
      return getSyncToken(typeTemplate, length);
    }
  }
  /**
   * @description async token generator
   *
   * @param {string} type "normal", "medium", "extra" or "onlyNumbers"
   *
   * - "normal" = (a-z)
   * - "medium" = (a-z + 0-9)
   * - "extra" = (a-Z + 0-9)
   * - "onlyNumbers" = (0-9)
   *
   * @param {number} length length of token
   * @example genAsync("extra", 100)
   * @returns {Promise<string>}
   */
  genAsync(type, length) {
    this.#methodType = "genAsync";
    const isValid = this.#validParameters(type, length);
    if (isValid) {
      let typeTemplate = this.#getTypeTemplate(type);
      return getAsyncToken(typeTemplate, length);
    }
  }
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
  syncValidator(type, length, token, allowedPlusCharacters){
    this.#methodType = "syncValidator";
    const isValid = this.#validParameters(type, length);
    const checkValidatorPar = this.#checkValidatorParameters(token, allowedPlusCharacters);
    if (isValid && checkValidatorPar) {
      let typeTemplate = this.#getTypeTemplate(type);
      return syncValidatorTest(typeTemplate, length, token, allowedPlusCharacters);
    }
  }
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
  asyncValidator(type, length, token, allowedPlusCharacters){
    this.#methodType = "asyncValidator";
    const isValid = this.#validParameters(type, length);
    const checkValidatorPar = this.#checkValidatorParameters(token, allowedPlusCharacters);
    if (isValid && checkValidatorPar) {
      let typeTemplate = this.#getTypeTemplate(type);
      return asyncValidatorTest(typeTemplate, length, token, allowedPlusCharacters);
    }
  }
  #getTypeTemplate(type){
    if (type === "normal") {
      return this.#letters;
    } else if (type === "medium") {
      let medium = this.#letters + this.#numbers;
      return medium;
    } else if (type === "extra") {
      let extra = this.#letters + this.#letters.toUpperCase() + this.#numbers;
      return extra;
    } else {
      return this.#numbers;
    }
  }
  #checkValidatorParameters(token, allowedPlusCharacters){
    try {
      const usedMethod = ` -> ${this.#methodType}(type: string, length: number, token: string, allowedPlusCharacters: string | undefined)`;
      if(typeof token !== "string"){
        throw new Error(`The third parameter must be a string  ${usedMethod}`);
      } else if(typeof allowedPlusCharacters !== "string" && typeof allowedPlusCharacters !== "undefined"){
        throw new Error(`The fourth parameter must be a string or undefined  ${usedMethod}`);
      } else {
        return true;
      }
    }catch(err){
      console.log(err);
    }
  }
  #validParameters(type, length) {
    try {
      const usedMethod = ` -> ${this.#methodType}(type: string, length: number)`;
      if (typeof type === "undefined" || typeof length === "undefined") {
        throw new Error(`Missing parameter ${usedMethod}`);
      } else if (typeof type !== "string") {
        throw new Error(`The first parameter must be a string  ${usedMethod}`);
      } else if (typeof length !== "number") {
        throw new Error(`The second parameter must be a number  ${usedMethod}`);
      } else if (typeof length === "number" && length <= 0) {
        throw new Error(`The second parameter must be bigger number than 0`);
      } else if (
        (this.#methodType === "genSync" || this.#methodType === "genAsync" || this.#methodType === "syncValidator" || this.#methodType === "asyncValidator") &&
        !this.#availableTypes.includes(type)
      ) {
        throw new Error(`Use 'normal', 'medium', 'extra' or 'onlyNumbers' at first parameter  ${usedMethod}`);
      } else {
        return true;
      }
    } catch (err) {
      console.log(err);
    }
  }
}

const newToken = new Generator();

module.exports = newToken;