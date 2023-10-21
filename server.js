const PORT = process.env.PORT || 8000
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json()) 
require('dotenv').config();

const allowedOrigins = [
    'https://accommodation-resources.com', // Replace with your Netlify site URL
  ];
  
  const corsOptions = {
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  };
  
  app.use(cors(corsOptions));

const API_KEY=process.env.OPENAI_API_KEY;


app.get('/completions', async (req, res) => {
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model : "gpt-3.5-turbo",
            messages: [{ role: "user", content: req.body.message},],
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



app.listen(PORT, () => console.log('Your server is running on PORT ' + PORT))



