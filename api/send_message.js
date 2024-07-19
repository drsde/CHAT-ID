const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/send_message', async (req, res) => {
    const message = req.body.message;
    const chat_id = "5565154096"; // Telegram chat ID
    const bot_token = "6507539608:AAEXcP2rHaZF2UyHixVzN_JDRgDKdh17kdc"; // Bot token

    const url = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(message)}`;

    try {
        const response = await fetch(url);
        if (response.ok) {
            res.status(200).send('Message sent to Telegram bot!');
        } else {
            res.status(500).send('Failed to send message.');
        }
    } catch (error) {
        res.status(500).send('Error sending message.');
    }
});

module.exports = app;
