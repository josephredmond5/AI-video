const readline = require('readline')
const { generateMeta } = require('./controllers/OpenaiController')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('youtube video title \n', generateMeta)