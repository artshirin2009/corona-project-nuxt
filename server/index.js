const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt');
const bodyParser = require('body-parser');




const app = express()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

require('./db/connection');

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server
  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express

  const countriesRouter = require('./api/countries');
  const citiesRouter = require('./api/cities');
  const categoriesRouter = require('./api/categories');
  const authRouter = require('./api/auth');
  const serviceRouter = require('./api/service');

  app.use(bodyParser.json())
  
  app.use('/api/countries', countriesRouter);
  app.use('/api/cities', citiesRouter);
  app.use('/api/categories', categoriesRouter);
  app.use('/api/auth/', authRouter);
  app.use('/api/service/', serviceRouter);

  app.use(nuxt.render)



  


  // Listen the server
  app.listen(process.env.APP_PORT, process.env.APP_HOST)
  consola.ready({
    message: `Server listening on http://${process.env.APP_HOST}:${process.env.APP_PORT}`,
    badge: true
  })
}
start() 
