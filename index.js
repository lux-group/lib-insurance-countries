const nibSpecificCountries = require("./countries/nib");
const cgSpecificCountries = require("./countries/coverGenius");
const universalCountries = require("./countries/universal");

// The order matters here - be careful
const countries = nibSpecificCountries
  .concat(cgSpecificCountries)
  .concat(universalCountries);

const cgCountries = universalCountries.concat(cgSpecificCountries);

const nibCountries = universalCountries.concat(nibSpecificCountries);

function getNames() {
  return countries.map(function (c) {
    return c.name;
  });
}

function getCgNames() {
  return cgCountries.map(function (c) {
    return c.name;
  });
}

function getNibNames() {
  return nibCountries.map(function (c) {
    return c.name;
  });
}

function getCodeByName(name) {
  var country = countries.find(function (c) {
    return c.name === name;
  });

  return country ? country.code : undefined;
}

function getNameByCode(code) {
  var country = countries.find(function (c) {
    return c.code === code;
  });

  return country ? country.name : undefined;
}

function getTwoLetterCodeByName(name) {
  var country = countries.find(function (c) {
    return c.name === name;
  });

  return country ? country.two_letter_country_code : undefined;
}

module.exports = {
  countries,
  cgCountries,
  nibCountries,
  getNames,
  getCgNames,
  getNibNames,
  getCodeByName,
  getNameByCode,
  getTwoLetterCodeByName,
};
