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
  it('should return the destinations region if only one destination', function () {
    expect(libInsuranceCountries.getHighestRiskRegion(['NZ'])).to.equal('new zealand')
  })

  it('should return the hightest risk region if multiple destinations', function () {
    expect(libInsuranceCountries.getHighestRiskRegion(['NZ', 'JP'])).to.equal('asia')
  })

  it('should return the worldwide region if multiple destinations', function () {
    expect(libInsuranceCountries.getHighestRiskRegion(['AU', 'NZ', 'JP', 'EH'])).to.equal('worldwide')
  })

  it('should return domestic if travelling to in Australia', function () {
    expect(libInsuranceCountries.getHighestRiskRegion(['AU'])).to.equal('domestic')
  })

  it('should throw an error if destination cant be mapped', function () {
    expect(function () { return libInsuranceCountries.getHighestRiskRegion(['ZXD']) }).to.throw('Destination ZXD could not be found')
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
