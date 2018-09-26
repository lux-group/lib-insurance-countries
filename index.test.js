var expect = require('chai').expect

var libInsuranceCountries = require('./index')

describe('getNames', function () {
  it('should return the names', function () {
    var names = libInsuranceCountries.getNames()

    expect(names.length).to.be.greaterThan(0)
    expect(names.includes('Australia')).to.be.true
  })
})

describe('findByName', function () {
  it('should return the country', function () {
    expect(libInsuranceCountries.findByName('australia')).to.deep.equal({
      code: 'AU',
      name: 'Australia'
    })
  })
})

describe('findByCode', function () {
  it('should return the country', function () {
    expect(libInsuranceCountries.findByCode('NZ')).to.deep.equal({
      code: 'NZ',
      name: 'New Zealand'
    })
  })
})

