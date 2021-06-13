const normalToken = require("./generator/normal/normalToken");
const promiseToken = require("./generator/promise/promiseToken");
const numberToken = require("./generator/normal/numberToken");
const numberPromiseToken = require("./generator/promise/numberPromiseToken");

class Generator {
    /**
     * @description normal Token generator with two parameters
     * 
     * @param {string} type "normal", "medium" or "extra"
     * @param {number} rounds a number, this tells you the length of the token
     * @returns {string} a string
     */
    generate(type, rounds) {
        try {
            if (type !== "normal" && type !== "medium" && type !== "extra") {
                throw new Error(`First parameter is bad: -> ${type} <- use it "normal", "medium" or "extra"`)
            }
            if (typeof rounds !== "number") {
                throw new Error(`Second parameter it must be a number type -> you use ${typeof rounds} type <-`)
            }
            return normalToken(type, rounds)
        } catch (e) {
            console.log(e)
        }
    }
    /**
     * @description like generate function but returns with Promise
     * 
     * @param {string} type "normal", "medium" or "extra"
     * @param {number} rounds a number, this tells you the length of the token
     * @returns {Promise} Promise object
     */
    promiseGenerate(type, rounds) {
        try {
            if (type !== "normal" && type !== "medium" && type !== "extra") {
                throw new Error(`First parameter is bad: -> ${type} <- use it "normal", "medium" or "extra"`)
            }
            if (typeof rounds !== "number") {
                throw new Error(`Second parameter it must be a number type -> you use ${typeof rounds} type <-`)
            }
            return promiseToken(type, rounds)
        } catch (e) {
            console.log(e)
        }
    }
    /**
     * @description numberGenerate function return with only numbers
     * @description the first character of a return token will never be 0
     * 
     * @param {number} rounds a number, this tells you the length of the number token
     * @returns {string} numbers but as string
     */
    numberGenerate(rounds) {
        try {
            if (typeof rounds !== "number") {
                throw new Error(`parameter it must be a number type -> you use ${typeof rounds} type <-`)
            }
            return numberPromiseToken(rounds)
        } catch (e) {
            console.log(e)
        }
    }
    /**
     * @description like numberGenerate function but returns with Promise
     * 
     * @param {number} rounds a number, this tells you the length of the number token
     * @returns {Promise} Promise object
     */
    numberPromiseGenerate(rounds) {
        try {
            if (typeof rounds !== "number") {
                throw new Error(`parameter it must be a number type -> you use ${typeof rounds} type <-`)
            }
            return numberToken(rounds)
        } catch (e) {
            console.log(e)
        }
    }
}

const newToken = new Generator();

module.exports = newToken;