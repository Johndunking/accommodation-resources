const fetch = require('node-fetch');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const API_KEY = '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';

exports.handler = async ('/completions', async (req, res) => {
  const body = JSON.parse(event.body);

  const options = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: body.message }],
      max_tokens: 700
    })
  };

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', options);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' })
    };
  }
});

module.exports = { handler };