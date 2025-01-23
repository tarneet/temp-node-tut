// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const sayHi = require('./5-utils')
const names = require('./4-names')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

console.log(data)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

