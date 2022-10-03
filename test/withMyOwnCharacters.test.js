const token = require("../index");

test("Missing parameter", async () => {
  const msg =
    "Missing parameter -> withMyOwnCharacters(type: string, length: number)";
  expect.assertions(1);
  try {
    await token.withMyOwnCharacters(10);
  } catch (e) {
    expect(e.message).toBe(msg);
  }
});

test("The first parameter must be a string", async () => {
  const msg =
    "The first parameter must be a string -> withMyOwnCharacters(type: string, length: number)";
  try {
    await token.withMyOwnCharacters(false, 20);
  } catch (e) {
    expect(e.message).toBe(msg);
  }
});

test("The second parameter must be a number", async () => {
  const msg =
    "The second parameter must be a number -> withMyOwnCharacters(type: string, length: number)";
  try {
    await token.withMyOwnCharacters("extra", "20");
  } catch (e) {
    expect(e.message).toBe(msg);
  }
});

test("The second parameter must be bigger number than 0", async () => {
  const msg = "The second parameter must be bigger number than 0";
  try {
    await token.withMyOwnCharacters("extra", 0);
  } catch (e) {
    expect(e.message).toBe(msg);
  }
});

test("Returned token have to length 50", async () => {
  expect(await token.withMyOwnCharacters("abc12345", 50)).toHaveLength(50);
});

test("Returned token have to be a string", async () => {
  expect(typeof (await token.withMyOwnCharacters("abc12345", 50))).toBe(
    "string"
  );
});

test("All Type contains valid characters", async () => {
  const AllTypeCointainsValidCharacters = (freshToken) => {
    const tokenTemplate = "abc12345";
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
  expect(
    AllTypeCointainsValidCharacters(
      await token.withMyOwnCharacters("abc12345", 10)
    )
  ).toBe(true);
});
