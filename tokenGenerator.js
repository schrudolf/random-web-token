const getSyncToken = require("./generator/sync/genSync");
const getAsyncToken = require("./generator/async/genAsync");
const getTokenWithMyOwnCharacters = require("./generator/async/withMyOwnCharacters");

class Generator {
  /**
   * @description Create a Token with your own characters
   *
   * @param {string} type string Sample: "abc123" generate a token with abc123 characters
   * @param {number} rounds a number, this tells you the length of the token
   * @example withMyOwnCharacters("abc123", 100)
   * @returns {Promise<string>}
   */
  withMyOwnCharacters(type, rounds) {
    const [isValid, msg] = this.#validParameters(type, rounds);
    if (!isValid) {
      console.log(msg);
    } else {
      return getTokenWithMyOwnCharacters(type, rounds);
    }
  }
  /**
   * @description genSync() with two parameters
   *
   * @param {string} type "normal", "medium", "extra" or "onlyNumbers"
   *
   * - "normal" = (a-z)
   * - "medium" = (a-z + 0-9)
   * - "extra" = (a-Z + 0-9)
   * - "onlyNumbers" = (0-9)
   *
   * @param {number} rounds length of token
   * @example genSync("extra", 100)
   * @returns {string} a string
   */
  genSync(type, rounds) {
    const [isValid, msg] = this.#validParameters(type, rounds);
    if (!isValid) {
      console.log(msg);
    } else {
      return getSyncToken(type, rounds);
    }
  }
  /**
   * @description same as genSync() method but returns with a Promise
   *
   * @param {string} type "normal", "medium", "extra" or "onlyNumbers"
   *
   * - "normal" = (a-z)
   * - "medium" = (a-z + 0-9)
   * - "extra" = (a-Z + 0-9)
   * - "onlyNumbers" = (0-9)
   *
   * @param {number} rounds length of token
   * @example genAsync("extra", 100)
   * @returns {Promise<string>}
   */
  genAsync(type, rounds) {
    const [isValid, msg] = this.#validParameters(type, rounds);
    if (!isValid) {
      console.log(msg);
    } else {
      return getAsyncToken(type, rounds);
    }
  }
  #validParameters(type, rounds) {
    if (typeof type !== "string") {
      return [false, `The first parameter parameter must be a string`];
    } else if (typeof rounds !== "number") {
      return [false, `The second parameter must be a number`];
    } else if (typeof rounds === "number" && rounds <= 0) {
      return [false, `The second parameter must be bigger number than 0`];
    } else {
      return [true, "Valid parameters"];
    }
  }
}

const newToken = new Generator();

module.exports = newToken;
