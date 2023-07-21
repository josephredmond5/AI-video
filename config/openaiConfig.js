const { Configuration, OpenAIApi } = require('openai')
require('dotenv').config()

const openaiConfig = new Configuration({
    apiKey: process.env.OPEN_AI_KEY
})

const openai = new OpenAIApi(openaiConfig)

module.exports = openai
