const https = require('https')
const express = require('express')
const cors = require('cors')
const app = express()
const fs = require('fs')
const path = require('path')
app.use(express.json())
app.use(cors())


const API_KEY= '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'

app.post('/completions', async (req, res) => {
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model : "gpt-3.5-turbo",
            messages: [{ role: "user", content: req.body.message}, ],
            
            max_tokens: 700,
            
        })
    }
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        res.send(data)

    } catch (error) {
        console.error(error)
    }

})

const sslServer = https.createServer({
    key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))
}, app)

sslServer.listen(3443, () => console.log('Secure server on port 3443'))



