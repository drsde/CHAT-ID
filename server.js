const express = require('express');
const path = require('path');
const sendMessage = require('./api/send_message');
require('dotenv').config();  // Load environment variables from .env file

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', sendMessage);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
