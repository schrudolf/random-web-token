# random-web-token

## Generate a token easily
**you can generate tokens with (a-z, a-Z, a-Z + 0-9 ...etc) or with your own characters easily**


## Installation

```sh
npm install random-web-token
```

## Normal Usage

```sh
const token = require("random-web-token");

console.log(token.generate("extra", 50))
```
**Sample: returns with 50length token**

-> sHF3p8zZCTdAmJ0cyS60NK9RRPXi6NQ42zdUbigMBZYZY0504H

## Promise Usage  

**same as token.generate() function, but returns with promise**

```sh
token.promiseGenerate("extra", 50)
```

## Parameter help for generate() and promiseGenerate() functions

**functions has 2 parameters**

first parameter is a string
  - "normal"  ---> token generated with (a-z) characters = abcdefghijklmnopqrstuvwxyz
  - "medium"  ---> token generated with (a-z + 0-9) characters = abcdefghijklmnopqrstuvwxyz0123456789
  - "extra"   ---> token generated with (a-Z + 0-9) characters = ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789

second parameter is a number, this tells you the length of the token

## If you want to salt with your own characters

**use the saltingWithMyCharacters() function**

Sample: 

```sh
token.saltingWithMyCharacters(["a","b","c","1","2","3"], 50)
```

generate a 50 length token with abc123 characters

## Number Token generator

**function has one parameter**

is a number, this tells you the length of the Number token

the first character of a return token will never be 0

```sh
token.numberGenerate(10)
```

**Sample: returns with 10length Number token**

-> 1368248387

## Promise Number Token generator

like numberGenerate() function but returns with Promise

the first character of a return token will never be 0

```sh
token.numberPromiseGenerate(10)
```