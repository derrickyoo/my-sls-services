module.exports.handler = (evt, ctx, done) => { 
  done(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: {
        id: 1, name: 'car wash', status: 'open'
      }
    })
  })
}
