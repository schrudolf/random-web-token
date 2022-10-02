const token = require("../index");
const getTypeTemplates = require("../lib/tokenTemplates/getTypeTemplate");

test("Missing parameter", () => {
  const msg = "Missing parameter -> genSync(type: string, length: number)";
  expect(() => token.genSync(20)).toThrowError(new Error(msg));
  expect(() => token.genSync("extra")).toThrowError(new Error(msg));
  expect(() => token.genSync()).toThrowError(new Error(msg));
});

test("The first parameter must be a string", () => {
  const msg =
    "The first parameter must be a string -> genSync(type: string, length: number)";
  expect(() => token.genSync(false, 20)).toThrowError(new Error(msg));
});

test("The second parameter must be a number", () => {
  const msg =
    "The second parameter must be a number -> genSync(type: string, length: number)";
  expect(() => token.genSync("extra", "20")).toThrowError(new Error(msg));
});

test("The second parameter must be bigger number than 0", () => {
  const msg = "The second parameter must be bigger number than 0";
  expect(() => token.genSync("extra", 0)).toThrowError(new Error(msg));
  expect(() => token.genSync("extra", -1)).toThrowError(new Error(msg));
});

test("The first parameter must be a valid type", () => {
  const msg =
    "Use 'normal', 'normal+', 'medium', 'medium+', 'extra' or 'onlyNumbers' at first parameter -> genSync(type: string, length: number)";
  expect(() => token.genSync("asdasdasd", 50)).toThrowError(new Error(msg));
});

test("Returned token have to length 50", () => {
  expect(token.genSync("normal", 50)).toHaveLength(50);
  expect(token.genSync("normal+", 50)).toHaveLength(50);
  expect(token.genSync("medium", 50)).toHaveLength(50);
  expect(token.genSync("medium+", 50)).toHaveLength(50);
  expect(token.genSync("extra", 50)).toHaveLength(50);
  expect(token.genSync("onlyNumbers", 50)).toHaveLength(50);
});

test("Returned token have to be a string", () => {
  expect(typeof token.genSync("normal", 50)).toBe("string");
  expect(typeof token.genSync("normal+", 50)).toBe("string");
  expect(typeof token.genSync("medium", 50)).toBe("string");
  expect(typeof token.genSync("medium+", 50)).toBe("string");
  expect(typeof token.genSync("extra", 50)).toBe("string");
  expect(typeof token.genSync("onlyNumbers", 50)).toBe("string");
});

test('"onlyNumbers" type needs to be a string token with numbers', () => {
  expect(typeof parseInt(token.genSync("onlyNumbers", 50))).toBe("number");
});

test("All Type contains valid characters", () => {
  const AllTypeCointainsValidCharacters = (type) => {
    const freshToken = token.genSync(type, 10);
    const tokenTemplate = getTypeTemplates(type);
    const removeRepeatingLetters = Array.from(
      new Set(freshToken.split(""))
    ).toString();
    const newToken = removeRepeatingLetters.replace(/,/g, "");
    for (let i = 0; i < newToken.length; i++) {
      if (!tokenTemplate.includes(newToken[i])) {
        return false;
      } else if (i === newToken.length - 1) {
        return true;
      }
    }
  };
  expect(AllTypeCointainsValidCharacters("normal")).toBe(true);
  expect(AllTypeCointainsValidCharacters("normal+")).toBe(true);
  expect(AllTypeCointainsValidCharacters("medium")).toBe(true);
  expect(AllTypeCointainsValidCharacters("medium+")).toBe(true);
  expect(AllTypeCointainsValidCharacters("extra")).toBe(true);
  expect(AllTypeCointainsValidCharacters("onlyNumbers")).toBe(true);
});
