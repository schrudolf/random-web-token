const normalToken = require("./generator/normal/normalToken");
const promiseToken = require("./generator/promise/promiseToken");

class Generator {
    /**
     * normal Token generator with two parameters
     * 
     * @param {string} type "normal", "medium" or "extra"
     * @param {number} rounds a number, this tells you the length of the token
     */
    generate(type, rounds) {
        try {
            if (type !== "normal" && type !== "medium" && type !== "extra") {
                throw new Error(`First parameter is bad: -> ${type} <- use it "normal", "medium" or "extra"`)
            }
            if (typeof rounds !== "number") {
                throw new Error(`Second parameter it must be a number type -> ${rounds}`)
            }
            return normalToken(type, rounds)
        } catch (e) {
            console.log(e)
        }
    }
    /**
     * like generate function but returns with Promise
     * 
     * @param {string} type "normal", "medium" or "extra"
     * @param {number} rounds a number, this tells you the length of the token
     */
    promiseGenerate(type, rounds) {
        try {
            if (type !== "normal" && type !== "medium" && type !== "extra") {
                throw new Error(`First parameter is bad: -> ${type} <- use it "normal", "medium" or "extra"`)
            }
            if (typeof rounds !== "number") {
                throw new Error(`Second parameter it must be a number type -> ${rounds}`)
            }
            return promiseToken(type, rounds)
        } catch (e) {
            console.log(e)
        }
    }
}

const newToken = new Generator();

module.exports = newToken;