/* global testHelpers */
import chai from 'chai'
import sinon from 'sinon'
import pkg from '../package.json'

sinon.assert.expose(chai.assert, { prefix: '' })

global.testHelpers = {
  assert: chai.assert,
  sinon,
  pkg
}

export default testHelpers
