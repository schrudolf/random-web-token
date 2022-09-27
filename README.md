# random-web-token

**Generate tokens with (a-z, a-Z, a-Z + 0-9 ...etc) or with your own characters easily without external dependencies**

`After v1.9.0 promiseGenerate and generate methods will not be available. Use genSync(), genAsync() instead`

## Installation

```sh
npm install random-web-token
```

## Usage

```sh
const token = require("random-web-token");

console.log(token.genSync("extra", 50)) // -> sHF3p8zZCTdAmJ0cyS60NK9RRPXi6NQ42zdUbigMBZYZY0504H
```

## Async usage  

**same as token.genSync() method, but returns with a Promise**

```sh
const newToken = await token.genAsync("extra", 50);
console.log(newToken) // -> sHF3p8zZCTdAmJ0cyS60NK9RRPXi6NQ42zdUbigMBZYZY0504H
```

## Validator usage  

**Validator for genSync() or genAsync()**

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

## Parameter help for genSync() and genAsync() methods

**methods has 2 parameters**

first parameter is a string
  - "normal"  -> create a token with (a-z) characters
  - "medium"  -> create a token with (a-z + 0-9) characters
  - "extra"   -> create a token with (a-Z + 0-9) characters
  - "onlyNumbers"   -> create a token with (0-9) characters

second parameter is a number, this tells the length of token

## If you want a token with your own characters

**use withMyOwnCharacters() method**

```sh
const newToken = await token.withMyOwnCharacters("abc123", 10)
console.log(newToken) // -> a2b1cc23ab
```