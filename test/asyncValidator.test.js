const token = require("../index");

test("Missing parameter", async () => {
  const msg =
    "Missing parameter -> asyncValidator(type: string, length: number, token: string, allowedPlusCharacters: string | undefined)";
  expect.assertions(1);
  try {
    await token.asyncValidator(10);
  } catch (e) {
    expect(e.message).toBe(msg);
  }
});

test("The first parameter must be a valid type", async () => {
  const msg =
    "Use 'normal', 'normal+', 'medium', 'medium+', 'extra' or 'onlyNumbers' at first parameter -> asyncValidator(type: string, length: number, token: string, allowedPlusCharacters: string | undefined)";
  expect.assertions(1);
  try {
    await token.asyncValidator("asdasdasd", 50, "token");
  } catch (e) {
    expect(e.message).toBe(msg);
  }
});

test("The second parameter must be a number", async () => {
  const msg =
    "The second parameter must be a number -> asyncValidator(type: string, length: number, token: string, allowedPlusCharacters: string | undefined)";
  expect.assertions(1);
  try {
    await token.asyncValidator("extra", "20", "token");
  } catch (e) {
    expect(e.message).toBe(msg);
  }
});

test("The second parameter must be bigger number than 0", async () => {
  const msg = "The second parameter must be bigger number than 0";
  expect.assertions(1);
  try {
    await token.asyncValidator("extra", 0, "token");
  } catch (e) {
    expect(e.message).toBe(msg);
  }
});

test("The third parameter must be a token as string", async () => {
  const msg =
    "The third parameter must be a string -> asyncValidator(type: string, length: number, token: string, allowedPlusCharacters: string | undefined)";
  expect.assertions(1);
  try {
    await token.asyncValidator("extra", 20, false);
  } catch (e) {
    expect(e.message).toBe(msg);
  }
});

test("The fourth parameter must be a string or undefined", async () => {
  const msg =
    "The fourth parameter must be a string or undefined -> asyncValidator(type: string, length: number, token: string, allowedPlusCharacters: string | undefined)";
  expect.assertions(1);
  try {
    await token.asyncValidator("extra", 20, "token", 10);
  } catch (e) {
    expect(e.message).toBe(msg);
  }
});

  test("Returned value have to be true or false", async () => {
    expect(await token.asyncValidator("extra", 12, "abc123ABC123")).toBe(true);
    expect(await token.asyncValidator("extra", 15, "abc123ABC123!%/", "!%/")).toBe(true);
    expect(await token.asyncValidator("extra", 15, "abc123ABC123")).toBe(false);
    expect(await token.asyncValidator("extra", 15, "abc123ABC123!%/")).toBe(false);
  });
