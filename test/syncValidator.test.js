const token = require("../index");

test("Missing parameter", () => {
  const msg =
    "Missing parameter -> syncValidator(type: string, length: number, token: string, allowedPlusCharacters: string | undefined)";
  expect(() => token.syncValidator(20)).toThrowError(new Error(msg));
  expect(() => token.syncValidator("extra")).toThrowError(new Error(msg));
  expect(() => token.syncValidator()).toThrowError(new Error(msg));
});

test("The first parameter must be a valid type", () => {
  const msg =
    "Use 'normal', 'normal+', 'medium', 'medium+', 'extra' or 'onlyNumbers' at first parameter -> syncValidator(type: string, length: number, token: string, allowedPlusCharacters: string | undefined)";
  expect(() => token.syncValidator("asdasdasd", 50, "token")).toThrowError(
    new Error(msg)
  );
});

test("The second parameter must be a number", () => {
  const msg =
    "The second parameter must be a number -> syncValidator(type: string, length: number, token: string, allowedPlusCharacters: string | undefined)";
  expect(() => token.syncValidator("extra", "20", "token")).toThrowError(
    new Error(msg)
  );
});

test("The second parameter must be bigger number than 0", () => {
  const msg = "The second parameter must be bigger number than 0";
  expect(() => token.syncValidator("extra", 0, "token")).toThrowError(
    new Error(msg)
  );
  expect(() => token.syncValidator("extra", -1, "token")).toThrowError(
    new Error(msg)
  );
});

test("The third parameter must be a token as string", () => {
  const msg =
    "The third parameter must be a string -> syncValidator(type: string, length: number, token: string, allowedPlusCharacters: string | undefined)";
  expect(() => token.syncValidator("extra", 20, false)).toThrowError(
    new Error(msg)
  );
});

test("The fourth parameter must be a string or undefined", () => {
  const msg =
    "The fourth parameter must be a string or undefined -> syncValidator(type: string, length: number, token: string, allowedPlusCharacters: string | undefined)";
  expect(() => token.syncValidator("extra", 20, "token", 10)).toThrowError(
    new Error(msg)
  );
  expect(() => token.syncValidator("extra", 20, "token", false)).toThrowError(
    new Error(msg)
  );
  expect(() =>
    token.syncValidator("extra", 20, "token", "asd!%/")
  ).not.toThrowError(new Error(msg));
});

test("Returned value have to be true or false", () => {
  expect(token.syncValidator("extra", 12, "abc123ABC123")).toBe(true);
  expect(token.syncValidator("extra", 15, "abc123ABC123!%/", "!%/")).toBe(true);
  expect(token.syncValidator("extra", 15, "abc123ABC123")).toBe(false);
  expect(token.syncValidator("extra", 15, "abc123ABC123!%/")).toBe(false);
});
