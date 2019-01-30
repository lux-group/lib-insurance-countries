var expect = require("chai").expect

var libInsuranceCountries = require("./index")

describe("getNames", function() {
  it("should return the names", function() {
    var names = libInsuranceCountries.getNames()

    expect(names.length).to.be.greaterThan(0)
    expect(names.includes("Australia")).to.be.true
  })
})

describe("getCodes", function() {
  it("should return the codes", function() {
    var codes = libInsuranceCountries.getCodes()

    expect(codes.length).to.be.greaterThan(0)
    expect(codes.includes("AU")).to.be.true
  })
})

describe("findByName", function() {
  it("should return the country", function() {
    expect(libInsuranceCountries.findByName("australia")).to.deep.equal({
      code: "AU",
      country_code: "AUS",
      name: "Australia",
      region: "Australia"
    })
  })
})

describe("findByCode", function() {
  it("should return the country", function() {
    expect(libInsuranceCountries.findByCode("NZ")).to.deep.equal({
      code: "NZ",
      country_code: "NZL",
      name: "New Zealand",
      region: "New Zealand"
    })
  })
})
