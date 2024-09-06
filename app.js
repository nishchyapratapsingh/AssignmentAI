const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { OpenAI } = require('openai');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const openai = new OpenAI({
  apiKey: 'b2d67f8f34f44601a8e4c6e81ec8674a',
  baseURL: 'https://api.aimlapi.com',
});

app.post('/ask', async (req, res) => {
  const userInput = req.body.message;

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: 'mistralai/Mistral-7B-Instruct-v0.2',
      messages: [{ role: 'user', content: userInput },{ role: 'system', content: 'You are an assignment solver'}],
    });
    const aiResponse = chatCompletion.choices[0]?.message?.content || "No response generated.";
    res.json({ reply: aiResponse });
  } catch (error) {
    console.error('Error occurred:', error);

    if (error.status === 429) {
      res.status(429).json({ error: 'Rate limit exceeded. Please try again later.' });
    } else if (error.status) {
      // Handle other HTTP errors with status code
      res.status(error.status).json({ error: `Error: ${error.status} - ${error.message}` });
    } else {
      // Handle unknown errors
      res.status(500).json({ error: 'An unexpected error occurred. Please try again later.' });
    }
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
