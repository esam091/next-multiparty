
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./next-multiparty.cjs.production.min.js')
} else {
  module.exports = require('./next-multiparty.cjs.development.js')
}
