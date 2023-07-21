const openai = require('../config/openai-config')

const generateMeta = async (title) => {

    const description = await openai.createChatCompletion({
        model: "gpt-3.5-turbo", 
        messages: [
        {
            role: 'user',
            content: `Come up with a description for a youtube video called${title}`
        }   
    ]
 })

}