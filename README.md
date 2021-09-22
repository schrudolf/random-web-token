# random-web-token

## Generate a token easily
**you can generate tokens with (a-z, a-Z, a-Z + 0-9 ...etc) or with your own characters easily**


## Installation

```sh
npm install random-web-token
```

## Usage

```sh
const token = require("random-web-token");

console.log(token.generate("extra", 50)) // -> sHF3p8zZCTdAmJ0cyS60NK9RRPXi6NQ42zdUbigMBZYZY0504H
```

## Promise Usage  

**same as token.generate() function, but returns with promise**
**in async function**

```sh
const newToken = await token.promiseGenerate("extra", 50)
console.log(newToken) // -> sHF3p8zZCTdAmJ0cyS60NK9RRPXi6NQ42zdUbigMBZYZY0504H
```

## Parameter help for generate() and promiseGenerate() functions

**functions has 2 parameters**

first parameter is a string
  - "normal"  -> create a token with (a-z) characters
  - "medium"  -> create a token with (a-z + 0-9) characters
  - "extra"   -> create a token with (a-Z + 0-9) characters
  - "onlyNumbers"   -> create a token with (0-9) characters

second parameter is a number, this tells you the length of the token

## If you want token with your own characters

**use the saltingWithMyCharacters() function**
**in async function**

Sample: 

```sh
const newToken = await token.saltingWithMyCharacters("abc123", 50)
```

generate a 50 length token with a,b,c characters and with 1,2,3 numbers
