'use strict'

const { send, json } = require('micro')
const HttpHash = require('http-hash')
const Db = require('platzigram-db')
const config = require('./config')
const utils = require('./lib/utils')
const DbStub = require('./test/stub/db')

const env = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : 'production'
let db = new Db(config.db)

if (env === 'test') {
  db = new DbStub()
}

const hash = HttpHash()

hash.set('POST /', async function authenticate (req, res, params) {
  let credentials = await json(req)
  await db.connect()
  let auth = await db.authenticate(credentials.username, credentials.password)

  if (!auth) {
    return send(res, 401, { error: 'invalid credentials' })
  }

  let token = await utils.signToken({
    username: credentials.username
  }, config.secret)

  await db.disconnect()

  send(res, 200, token)
})

module.exports = async function main (req, res) {
  let { method, url } = req
  let match = hash.get(`${method.toUpperCase()} ${url}`)

  if (match.handler) {
    try {
      await match.handler(req, res, match.params)
    } catch (e) {
      send(res, 500, {error: e.message})
    }
  } else {
    send(res, 404, {error: 'route not found'})
  }
}
