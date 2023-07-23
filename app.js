const express = require('express')
const { generateMeta, generateImage } = require('./controllers/OpenaiController')

// app setup
const app = express()
app.listen(4001, () =>  console.log('listening for requests on port 4001'))

// middleware
app.use(express.json())
app.use(express.static('public')) //  sets up a static file server in the Express.js application

// routes
app.post('/openai/meta', generateMeta)
app.post('/openai/meta', generateImage)