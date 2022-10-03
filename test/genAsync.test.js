const token = require("../index");
const getTypeTemplates = require("../lib/tokenTemplates/getTypeTemplate");

test("Missing parameter", async () => {
  const msg = "Missing parameter -> genAsync(type: string, length: number)";
  expect.assertions(1);
  try {
    await token.genAsync(10);
  } catch (e) {
    expect(e.message).toBe(msg);
  }
});

test("The first parameter must be a string", async () => {
  const msg =
    "The first parameter must be a string -> genAsync(type: string, length: number)";
  try {
    await token.genAsync(false, 20);
  } catch (e) {
    expect(e.message).toBe(msg);
  }
});

test("The second parameter must be a number", async () => {
  const msg =
    "The second parameter must be a number -> genAsync(type: string, length: number)";
  try {
    await token.genAsync("extra", "20");
  } catch (e) {
    expect(e.message).toBe(msg);
  }
});

test("The second parameter must be bigger number than 0", async () => {
  const msg = "The second parameter must be bigger number than 0";
  try {
    await token.genAsync("extra", 0);
  } catch (e) {
    expect(e.message).toBe(msg);
  }
});

test("The first parameter must be a valid type", async () => {
  const msg =
    "Use 'normal', 'normal+', 'medium', 'medium+', 'extra' or 'onlyNumbers' at first parameter -> genAsync(type: string, length: number)";
  try {
    await token.genAsync("asdasdasd", 50);
  } catch (e) {
    expect(e.message).toBe(msg);
  }
});

test("Returned token have to length 50", async () => {
  expect(await token.genAsync("normal", 50)).toHaveLength(50);
  expect(await token.genAsync("normal+", 50)).toHaveLength(50);
  expect(await token.genAsync("medium", 50)).toHaveLength(50);
  expect(await token.genAsync("medium+", 50)).toHaveLength(50);
  expect(await token.genAsync("extra", 50)).toHaveLength(50);
  expect(await token.genAsync("onlyNumbers", 50)).toHaveLength(50);
});

test("Returned token have to be a string", async () => {
  expect(typeof (await token.genAsync("normal", 50))).toBe("string");
  expect(typeof (await token.genAsync("normal+", 50))).toBe("string");
  expect(typeof (await token.genAsync("medium", 50))).toBe("string");
  expect(typeof (await token.genAsync("medium+", 50))).toBe("string");
  expect(typeof (await token.genAsync("extra", 50))).toBe("string");
  expect(typeof (await token.genAsync("onlyNumbers", 50))).toBe("string");
});

test('"onlyNumbers" type needs to be a string token with numbers', async () => {
  expect(typeof parseInt(await token.genAsync("onlyNumbers", 50))).toBe(
    "number"
  );
});

test("All Type contains valid characters", async () => {
  const AllTypeCointainsValidCharacters = (freshToken, type) => {
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
  expect(AllTypeCointainsValidCharacters(await token.genAsync("normal", 10), "normal")).toBe(true);
  expect(AllTypeCointainsValidCharacters(await token.genAsync("normal+", 10), "normal+")).toBe(true);
  expect(AllTypeCointainsValidCharacters(await token.genAsync("medium", 10), "medium")).toBe(true);
  expect(AllTypeCointainsValidCharacters(await token.genAsync("medium+", 10), "medium+")).toBe(true);
  expect(AllTypeCointainsValidCharacters(await token.genAsync("extra", 10), "extra")).toBe(true);
  expect(AllTypeCointainsValidCharacters(await token.genAsync("onlyNumbers", 10), "onlyNumbers")).toBe(true);
});
