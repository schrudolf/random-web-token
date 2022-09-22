# random-web-token

## Generate a token easily
**You can generate tokens with (a-z, a-Z, a-Z + 0-9 ...etc) or with your own characters easily without external dependencies**

`After v1.9.0 promiseGenerate and generate methods will not be available. Use genSync(),genAsync() instead`

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

**same as token.genAsync() method, but returns with a Promise**

```sh
const newToken = await token.genAsync("extra", 50)
console.log(newToken) // -> sHF3p8zZCTdAmJ0cyS60NK9RRPXi6NQ42zdUbigMBZYZY0504H
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

Sample: 

```sh
const newToken = await token.withMyOwnCharacters("abc123", 50)
console.log(newToken) // -> a2b1cc23a
```