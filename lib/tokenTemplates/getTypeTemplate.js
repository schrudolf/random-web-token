const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";

function getTypeTemplate(type) {
  if (type === "normal") {
    return letters;
  } else if (type === "normal+") {
    return letters.toUpperCase();
  } else if (type === "medium") {
    let medium = letters + numbers;
    return medium;
  } else if (type === "medium+") {
    let mediumPlus = letters.toUpperCase() + numbers;
    return mediumPlus;
  } else if (type === "extra") {
    let extra = letters + letters.toUpperCase() + numbers;
    return extra;
  } else {
    return numbers;
  }
}

module.exports = getTypeTemplate;
