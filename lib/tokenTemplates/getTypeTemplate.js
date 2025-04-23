const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const upperLetters = letters.toUpperCase();

const typeMap = {
  "normal": letters,
  "normal+": upperLetters,
  "medium": letters + numbers,
  "medium+": upperLetters + numbers,
  "extra": letters + upperLetters + numbers,
  "onlyNumbers": numbers
};

function getTypeTemplate(type) {
  return typeMap[type];
}

module.exports = getTypeTemplate;