# random-web-token

## Generate a token easily


## Installation

```sh
npm install random-web-token --save
```

## Normal Usage

```sh
const token = require("random-web-token");

console.log(token.generate("medium", 50))
```
**Sample: return with 50length token ->**

sHF3p8zZCTdAmJ0cyS60NK9RRPXi6NQ42zdUbigMBZYZY0504H

## Promise Usage  

**Sample: same as before, but returns with promise**

```sh
const token = require("random-web-token");

token.promiseGenerate("medium", 50)
```

## Parameter help

**all functions has 2 parameters**

first parameter is a string
  - "normal"  ---> token generated with lowercase and numbers
  - "medium"  ---> token generated with lowercase + uppercase and numbers
  - "extra"   ---> token generated with lowercase + uppercase + numbers and accented characters

second parameter is a number, this tells you the length of the token