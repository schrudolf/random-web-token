# random-web-token

Easily generate random alphanumeric tokens with custom character sets. Great for user-facing tokens such as activation links, password reset tokens, invitation codes, temporary session identifiers, or other non-critical unique strings.

---

## Installation

```bash
npm install random-web-token
```

### (Optional) TypeScript support:

```bash
npm install --save-dev @types/random-web-token
```

---

## Usage

### Generate a token (synchronously)

```js
const token = require("random-web-token");

const generated = token.genSync("extra", 50);
console.log(generated); // e.g., "fT7ZkWA4NpDqF0BjgY..."
```

---

### Generate a token (asynchronously with `await`)

```js
const token = require("random-web-token");

async function generate() {
  const generated = await token.genAsync("extra", 50);
  console.log(generated); // e.g., "h8YkMRaWg5tBz4QEX..."
}

generate();
```

**TypeScript version:**

```ts
import * as token from "random-web-token";

async function generate() {
  const generated = await token.genAsync("extra", 50);
  console.log(generated);
}

generate(); // -> sHF3p8zZCTdAmJ0cyS60NK...
```

---

## Character sets

Use one of the predefined sets as the first argument when generating tokens:

| Name            | Characters Used |
| --------------- | --------------- |
| `"normal"`      | a–z             |
| `"normal+"`     | A–Z             |
| `"medium"`      | a–z, 0–9        |
| `"medium+"`     | A–Z, 0–9        |
| `"extra"`       | a–z, A–Z, 0–9   |
| `"onlyNumbers"` | 0–9             |

---

## Validate a token

Check if a token meets your character set and length criteria:

```js
const token = require("random-web-token");

const t = token.genSync("extra", 50);

// Valid case
console.log(token.syncValidator("extra", 50, t)); // true

// Invalid: wrong length
console.log(token.syncValidator("extra", 40, t)); // false

// Invalid: wrong character set
console.log(token.syncValidator("normal", 50, t)); // false
```

### Allowing custom extra characters

You can optionally allow specific extra characters:

```js
const altered = token.genSync("extra", 50) + "+!/";
console.log(token.syncValidator("extra", 53, altered, "+!/")); // true
```

---

## Custom character sets

Need a fully custom character set? Use `withMyOwnCharacters()`:

```js
const token = require("random-web-token");

async function customToken() {
  const t = await token.withMyOwnCharacters("abc123", 10);
  console.log(t); // e.g., "a12cb31acb"
}

customToken();
```

---
