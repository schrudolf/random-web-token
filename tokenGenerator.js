const normalToken = require("./generator/normal/normalToken");
const promiseToken = require("./generator/promise/promiseToken");

class Generator {
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