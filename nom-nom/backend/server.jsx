// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Payment route
app.post('/api/create-payment', async (req, res) => {
  const { amount, email } = req.body;

  try {
    const response = await axios.post('https://api.chapa.co/v1/transaction/initialize', {
      amount,
      email,
      callback_url: 'http://localhost:5000/api/callback', // Example callback URL
      currency: 'ETB', // Ethiopian Birr
    }, {
      headers: {
        'Authorization': `Bearer YOUR_SECRET_KEY`, // Replace with your Chapa secret key
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.response.data.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});