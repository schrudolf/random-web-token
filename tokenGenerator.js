const normalToken = require("./generator/normal/normalToken");
const promiseToken = require("./generator/promise/promiseToken");
const saltingMyToken = require("./generator/promise/withMyOwnCharacters");

class Generator {
  /**
   * @description generate() with two parameters
   *
   * @param {string} type "normal", "medium", "extra" or "onlyNumbers"
   *
   * - "normal" = (a-z)
   * - "medium" = (a-z + 0-9)
   * - "extra" = (a-Z + 0-9)
   * - "onlyNumbers" = (0-9)
   *
   * @param {number} rounds a number, this tells you the length of the token
   * @example generate("extra", 100)
   * @returns {string} a string
   */
  generate(type, rounds) {
    console.log(
      "--> After v1.9.0 generate method will not be available. Use genSync() instead <--"
    );
    const [isValid, msg] = this.#validParameters(type, rounds);
    if (!isValid) {
      console.log(msg);
    } else {
      return normalToken(type, rounds);
    }
  }
  /**
   * @description like generate function but returns with Promise
   *
   * @param {string} type "normal", "medium", "extra" or "onlyNumbers"
   *
   * - "normal" = (a-z)
   * - "medium" = (a-z + 0-9)
   * - "extra" = (a-Z + 0-9)
   * - "onlyNumbers" = (0-9)
   *
   * @param {number} rounds a number, this tells you the length of the token
   * @example promiseGenerate("extra", 100)
   * @returns {Promise} Promise object string
   */
  promiseGenerate(type, rounds) {
    console.log(
        "--> After v1.9.0 promiseGenerate method will not be available. Use genAsync() instead <--"
      );
    const [isValid, msg] = this.#validParameters(type, rounds);
    if (!isValid) {
      console.log(msg);
    } else {
      return promiseToken(type, rounds);
    }
  }
  /**
   * @description You can salt with your own characters
   *
   * @param {string} type string Sample: "abc123" generate a token with abc123 characters
   * @param {number} rounds a number, this tells you the length of the token
   * @example withMyOwnCharacters("abc123", 100)
   * @returns {Promise} Promise object string
   */
  withMyOwnCharacters(type, rounds) {
    const [isValid, msg] = this.#validParameters(type, rounds);
    if (!isValid) {
      console.log(msg);
    } else {
      return saltingMyToken(type, rounds);
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
      return normalToken(type, rounds);
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
      return promiseToken(type, rounds);
    }
  }
  #validParameters(type, rounds) {
    if (typeof type !== "string") {
      return [
        false,
        `The first parameter parameter must be a string`,
      ];
    } else if (typeof rounds !== "number") {
      return [
        false,
        `The second parameter must be a number`,
      ];
    } else {
      return [true, "Valid parameters"];
    }
  }
}

const newToken = new Generator();

module.exports = newToken;
