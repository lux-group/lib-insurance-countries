var expect = require('chai').expect

var libInsuranceCountries = require('./index')

describe('getNames', function () {
  it('should return the names', function () {
    var names = libInsuranceCountries.getNames()

    expect(names.length).to.be.greaterThan(0)
    expect(names.includes('Australia')).to.be.true
  })
})

describe('getCodes', function () {
  it('should return the codes', function () {
    var codes = libInsuranceCountries.getCodes()

    expect(codes.length).to.be.greaterThan(0)
    expect(codes.includes('AU')).to.be.true
  })
})

describe('findByName', function () {
  it('should return the country', function () {
    expect(libInsuranceCountries.findByName('australia')).to.deep.equal({
      code: 'AU',
      country_code: 'AUS',
      name: 'Australia',
      region: 'DOMESTIC'
    })
  })
})

describe('findByCode', function () {
  it('should return the country', function () {
    expect(libInsuranceCountries.findByCode('NZ')).to.deep.equal({
      code: 'NZ',
      country_code: "NZL",
      name: 'New Zealand',
      region: "NEW ZEALAND"
    })
  })
})

describe('getHighestRiskRegion', function () {
  it('should return the destination if only one destination', function () {
    expect(libInsuranceCountries.getHighestRiskRegion(['NZ'])).to.equal('NZ')
  })

  it('should return the highest risk destination if multiple destinations', function () {
    expect(libInsuranceCountries.getHighestRiskRegion(['AU', 'NZ', 'JP'])).to.equal('JP')
  })

  it('should throw an error if destination cant be mapped', function () {
    expect(function () { return libInsuranceCountries.getHighestRiskRegion(['ZXD']) }).to.throw('Destination ZXD could not be found')
  })

  it('should throw an error if no destinations are passed', function () {
    expect(function () { return libInsuranceCountries.getHighestRiskRegion([]) }).to.throw('Destinations are required')
  })

  it('all destination regions should be in the risk map', function () {
    var allRegions = libInsuranceCountries.countries.map(function (country) {
      return country.region
    })

    allRegions.forEach(function (region) {
      expect(libInsuranceCountries.riskMap[region.toLowerCase()]).to.be.greaterThan(0)
    })
  })
})
