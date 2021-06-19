const normalToken = require("./generator/normal/normalToken");
const promiseToken = require("./generator/promise/promiseToken");
const numberToken = require("./generator/normal/numberToken");
const numberPromiseToken = require("./generator/promise/numberPromiseToken");
const saltingMyToken = require("./generator/promise/saltingWithMyCharacters");

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
     * @description You can salt with your unique characters
     * 
     * @param {Array<string>} types array with string characters. Sample: ["a","b","c","1","2","3"] It is made with these characters
     * @param {number} rounds a number, this tells you the length of the token
     * @returns {Promise} Promise object string
     */
    saltingWithMyCharacters(types, rounds) {
        try {
            if (!Array.isArray(types)) {
                throw new Error(`First parameter is bad: -> ${types} <- use it Sample: ["a","b","c","1","2","3"] `)
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
            return numberToken(rounds)
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