/*jshint node:true, mocha:true */

'use strict';

require('should');

var rescale = require('rescale')(require('floating-adapter')).rescale;
var length = require('linear-preset-factory')(require('../src/linear-presets-length'));

function convert(x, preset) {
  return rescale(x, preset[0], preset[1]);
};

function invert(preset) {
  return preset.slice(0).reverse();
};

describe('temperature presets', function() {
  it('should convert correctly', function() {
    (42195).should.be.exactly(convert(42.195, invert(length.metre_kilometre)), 'metre_kilometre')
      .and.exactly(convert(4219500, invert(length.metre_centimetre)), 'metre_centimetre')
      .and.exactly(convert(42195000, invert(length.metre_millimetre)), 'metre_millimetre')
      .and.exactly(convert(26.218757456454306, invert(length.metre_mile)), 'metre_mile')
      .and.exactly(convert(46145.01312335958, invert(length.metre_yard)), 'metre_yard')
      .and.exactly(convert(138435.03937007874, invert(length.metre_foot)), 'metre_foot')
      .and.exactly(convert(1661220.472440945, invert(length.metre_inch)), 'metre_inch')
      .and.exactly(convert(22.783477321814257, invert(length.metre_nauticalMile)), 'metre_nauticalMile');

    (0).should.be.exactly(convert(0, length.metre_kilometre), 'metre_kilometre')
      .and.exactly(convert(0, length.metre_centimetre), 'metre_centimetre')
      .and.exactly(convert(0, length.metre_millimetre), 'metre_millimetre')
      .and.exactly(convert(0, length.metre_mile), 'metre_mile')
      .and.exactly(convert(0, length.metre_yard), 'metre_yard')
      .and.exactly(convert(0, length.metre_foot), 'metre_foot')
      .and.exactly(convert(0, length.metre_inch), 'metre_inch')
      .and.exactly(convert(0, length.metre_nauticalMile), 'metre_nauticalMile');
  });
});
