const PORT = process.env.PORT || 8000;
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
require('dotenv').config();

const allowedOrigins = ['https://accommodation-resources.com'];

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

const API_KEY = process.env.OPENAI_API_KEY;

app.post('/completions', async (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  const { message } = req.body;

  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
      max_tokens: 700,
      stream: true, // For streaming responses
    }),
  };

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', options);
    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      // Massage and parse the chunk of data
      const chunk = decoder.decode(value);
      const lines = chunk.split('\n');
      const parsedLines = lines
        .map((line) => line.replace(/^data: /, '').trim()) // Remove the "data: " prefix
        .filter((line) => line !== '' && line !== '[DONE]') // Remove empty lines and "[DONE]"
        .map((line) => JSON.stringify({ data: line })); // Parse the JSON string and stringify it again
        let accumulatedContent = '';

        for (const line of lines) {
          const trimmedLine = line.replace(/^data: /, '').trim();
          if (trimmedLine !== '' && trimmedLine !== '[DONE]') {
            try {
              const { choices } = JSON.parse(trimmedLine);
        
              // Check if choices is an array and not empty
              if (Array.isArray(choices) && choices.length > 0) {
                const { delta } = choices[0];
        
                // Check if delta is defined
                if (delta) {
                  const { content } = delta;
        
                  // Accumulate content strings
                  if (content) {
                    accumulatedContent += content;
                  }
                }
              }
            } catch (error) {
              console.error('Error parsing JSON:', error);
              console.log('Problematic JSON string:', trimmedLine);
            }
          }
        }
        if (accumulatedContent !== '') {
          res.write(`${accumulatedContent}\n\n`);
        }
      }
  } catch (error) {
    console.error(error);
    // Handle errors and close the connection if needed
    res.status(500).end();
  }
});

app.listen(PORT, () => console.log('Your server is running on PORT ' + PORT));


