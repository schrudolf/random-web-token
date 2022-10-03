**Generating tokens with (a-z, a-Z, a-Z + 0-9 ...etc) or your own characters easily**

## Installation

```sh
npm i random-web-token
```

**install this too if typescript**

```sh
npm i --save-dev @types/random-web-token
```

## Usage

**Generating a token using genSync() or genAsync()**

```sh
const token = require("random-web-token");
console.log(token.genSync("extra", 50)); // -> sHF3p8zZCTdAmJ0cyS60NK9RRPXi6NQ42zdUbigMBZYZY0504H
```

**in Typescript**

```sh
import * as token from "random-web-token";
console.log(token.genSync("extra", 50)); // -> sHF3p8zZCTdAmJ0cyS60NK9RRPXi6NQ42zdUbigMBZYZY0504H
```

## Parameter help for genSync() and genAsync()

first parameter is a string (indicates the allowed characters in token)

- "normal" -> (a-z)
- "normal+" -> (A-Z)
- "medium" -> (a-z + 0-9)
- "medium+" -> (A-Z + 0-9)
- "extra" -> (a-Z + 0-9)
- "onlyNumbers" -> (0-9)

second parameter is a number, the length of token

## Token validator

**You can check that the received token contains only the allowed characters**

```sh
const firstToken = token.genSync("extra", 50);

console.log(token.syncValidator("extra", 50, firstToken)) // true firstToken same type,length
console.log(token.syncValidator("extra", 40, firstToken)) // false firstToken same type, but firstToken length !== 40
console.log(token.syncValidator("normal", 50, firstToken)) // false firstToken same length but not the same type.

const secondToken = token.genSync("extra", 50) + "+!/"; // returns 50 length token + 3 extra character

console.log(token.syncValidator("extra", 53, secondToken, "+!/")) // true same type/length and +3 allowed characters "+!/"
console.log(token.syncValidator("extra", 53, secondToken, "")) // false same type/length but "+!/" characters not allowed

fourth parameter is optional
```

## If you want a token with your own characters

**use withMyOwnCharacters() method**

```sh
await token.withMyOwnCharacters("abc123", 10) // -> a2b1cc23ab
```
