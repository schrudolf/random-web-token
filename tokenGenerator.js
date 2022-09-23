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
    const isValid = this.#validParameters(type, rounds);
    if (isValid) {
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
    const isValid = this.#validParameters(type, rounds);
    if (isValid) {
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
    const isValid = this.#validParameters(type, rounds);
    if (isValid) {
      return getAsyncToken(type, rounds);
    }
  }
  #validParameters(type, rounds) {
    try {
      if (typeof type !== "string") {
        throw new Error(`The first parameter parameter must be a string`);
      } else if (typeof rounds !== "number") {
        throw new Error(`The second parameter must be a number`);
      } else if (typeof rounds === "number" && rounds <= 0) {
        throw new Error(`The second parameter must be bigger number than 0`);
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
