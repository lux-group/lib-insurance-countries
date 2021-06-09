const {
  getCodeByName,
  getNameByCode,
  getNameByTwoLetterCode,
  getTwoLetterCodeByName
} = require('./index.js');

describe('getCodeByName', () => {
  it('should return "Australian Waters" code for "Australian Waters (cruises)" country', function() {
    const countryName = 'Australian Waters (cruises)';

    const code = getCodeByName(countryName)

    expect(code).toEqual("Australian Waters")
  });
});

describe('getNameByCode', () => {
  it('should return "Australian Waters (cruises)" name for "Australian Waters" country', function() {
    const countryCode = 'Australian Waters';

    const name = getNameByCode(countryCode)

    expect(name).toEqual("Australian Waters (cruises)")
  });
});

describe('getNameByTwoLetterCode', () => {
  it('should return "Australia" name by "AU" iso code', function() {
    const countryIsoCode = 'AU';

    const name = getNameByTwoLetterCode(countryIsoCode)

    expect(name).toEqual("Australia")
  });
});

describe('getTwoLetterCodeByName', () => {
  it('should return "AU" iso code by "Australia"', function() {
    const countryName = 'Australia';

    const isoCode = getTwoLetterCodeByName(countryName)

    expect(isoCode).toEqual("AU")
  });

  it('should return "AU" iso code by "Australian Waters (cruises)"', function() {
    const countryName = 'Australia';

    const isoCode = getTwoLetterCodeByName(countryName)

    expect(isoCode).toEqual("AU")
  });
});

