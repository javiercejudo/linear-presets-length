/*jshint node:true, mocha:true */

'use strict';

require('should');

var rescale = require('rescale')(require('floating-adapter')).rescale;
var length = require('../src/linear-presets-length');

function convert(x, preset) {
  return rescale(x, preset[0], preset[1]);
};

function invert(preset) {
  return preset.slice(0).reverse();
};

describe('temperature presets', function() {
  it('should convert correctly', function() {
    (42195).should.be.exactly(convert(42.195, invert(length.metreToKilometre)), 'metreToKilometre')
      .and.exactly(convert(4219500, invert(length.metreToCentimetre)), 'metreToCentimetre')
      .and.exactly(convert(42195000, invert(length.metreToMillimetre)), 'metreToMillimetre')
      .and.exactly(convert(26.218757456454306, invert(length.metreToMile)), 'metreToMile')
      .and.exactly(convert(46145.01312335958, invert(length.metreToYard)), 'metreToYard')
      .and.exactly(convert(138435.03937007874, invert(length.metreToFoot)), 'metreToFoot')
      .and.exactly(convert(1661220.472440945, invert(length.metreToInch)), 'metreToInch')
      .and.exactly(convert(22.783477321814257, invert(length.metreToNauticalMile)), 'metreToNauticalMile');

    (0).should.be.exactly(convert(0, length.metreToKilometre), 'metreToKilometre')
      .and.exactly(convert(0, length.metreToCentimetre), 'metreToCentimetre')
      .and.exactly(convert(0, length.metreToMillimetre), 'metreToMillimetre')
      .and.exactly(convert(0, length.metreToMile), 'metreToMile')
      .and.exactly(convert(0, length.metreToYard), 'metreToYard')
      .and.exactly(convert(0, length.metreToFoot), 'metreToFoot')
      .and.exactly(convert(0, length.metreToInch), 'metreToInch')
      .and.exactly(convert(0, length.metreToNauticalMile), 'metreToNauticalMile');
  });
});
