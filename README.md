# random-web-token

## Generate a token easily
**you can generate tokens with default characters or with your own characters easily**


## Installation

```sh
npm install random-web-token
```

## Normal Usage

```sh
const token = require("random-web-token");

console.log(token.generate("medium", 50))
```
**Sample: returns with 50length token**

-> sHF3p8zZCTdAmJ0cyS60NK9RRPXi6NQ42zdUbigMBZYZY0504H

## Promise Usage  

**same as before, but returns with promise**

```sh
token.promiseGenerate("medium", 50)
```

## Parameter help for generate and promiseGenerate function

**all functions has 2 parameters**

first parameter is a string
  - "normal"  ---> token generated with lowercase and numbers
  - "medium"  ---> token generated with lowercase + uppercase and numbers
  - "extra"   ---> token generated with lowercase + uppercase + numbers and accented characters

second parameter is a number, this tells you the length of the token

## If you want to salt with your unique characters

**use the saltingWithMyCharacters function**

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

like numberGenerate function but returns with Promise

the first character of a return token will never be 0

```sh
token.numberPromiseGenerate(10)
```