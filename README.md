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

```sh
token.promiseGenerate("extra", 50)
```

## Parameter help for generate() and promiseGenerate() functions

**functions has 2 parameters**

first parameter is a string
  - "normal"  -> create a token from (a-z) characters
  - "medium"  -> create a token from (a-z + 0-9) characters
  - "extra"   -> create a token from (a-Z + 0-9) characters
  - "onlyNumbers"   -> create a token from (0-9) characters

second parameter is a number, this tells you the length of the token

## If you want to salt with your own characters

**use the saltingWithMyCharacters() function**

Sample: 

```sh
token.saltingWithMyCharacters("abc123", 50)
```

generate a 50 length token with abc123 characters
