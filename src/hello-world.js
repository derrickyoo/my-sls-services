'use strict'

module.exports.handler = async (evt, ctx, done) => { 
  done(null, `${evt.message} From the event.json file!`)
}
