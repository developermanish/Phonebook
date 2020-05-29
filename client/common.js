const uuidv4 = require("uuid/v4");

const isEmptyOrNull = string => {
  return !string || !string.trim();
};

const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const unique = () => uuidv4();

const getRandomInt = (min = 1, max = 1000) => Math.floor(Math.random() * (max - min) + min);

const isObjectEmpty = obj =>
  Boolean(obj && typeof obj === "object") && Object.entries(obj).length === 0;

module.exports = {
  isEmptyOrNull,
  capitalizeFirstLetter,
  unique,
  getRandomInt,
  isObjectEmpty
};
