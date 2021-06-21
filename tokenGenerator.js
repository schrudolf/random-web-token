const normalToken = require("./generator/normal/normalToken");
const promiseToken = require("./generator/promise/promiseToken");
const numberPromiseToken = require("./generator/promise/numberPromiseToken");
const saltingMyToken = require("./generator/promise/saltingWithMyCharacters");

class Generator {
    /**
     * @description normal Token generator with two parameters
     * 
     * @param {string} type "normal", "medium", "extra" or "onlyNumbers"
     * @param {number} rounds a number, this tells you the length of the token
     * @returns {string} a string
     */
    generate(type, rounds) {
        try {
            if (type !== "normal" && type !== "medium" && type !== "extra" && type !== "onlyNumbers") {
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
     * @returns {Promise} Promise object string
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
     * @description You can salt with your own characters
     * 
     * @param {string} types string Sample: "abc123" generate a token with abc123 characters
     * @param {number} rounds a number, this tells you the length of the token
     * @returns {Promise} Promise object string
     */
    saltingWithMyCharacters(types, rounds) {
        try {
            if (typeof types !== "string") {
                throw new Error(`First parameter is bad: -> ${types} <- use it Sample: "abc123" `)
            }
            if (typeof rounds !== "number") {
                throw new Error(`Second parameter it must be a number type -> you use ${typeof rounds} type <-`)
            }
            return saltingMyToken(types, rounds)
        } catch (e) {
            console.log(e)
        }
    }
    /**
     * @description like numberGenerate function but returns with Promise
     * 
     * @param {number} rounds a number, this tells you the length of the number token
     * @returns {Promise} Promise object string
     */
    numberPromiseGenerate(rounds) {
        try {
            if (typeof rounds !== "number") {
                throw new Error(`parameter it must be a number type -> you use ${typeof rounds} type <-`)
            }
            return numberPromiseToken(rounds)
            
        } catch (e) {
            console.log(e)
        }
    }
}

const newToken = new Generator();

module.exports = newToken;