/* eslint-env mocha */

'use strict';

const expect = require('chai').expect; // eslint-disable-line
const reactNativeConfig = require('./react-native');
const baseConfig = require('.');

describe('Base config', () => {
  it('is an object', () => {
    expect(baseConfig).to.be.an('object');
  });
});

describe('React Native config', () => {
  it('is an object', () => {
    expect(reactNativeConfig).to.be.an('object');
  });
});
