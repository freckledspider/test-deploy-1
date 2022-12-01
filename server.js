require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const URL = process.env.DATABASE_URL;

app.get('/', (request, response) => {
    response.send(`hello world i am listening to port ${PORT}`);
});

app.get('/dburl', (request, response) => {
    response.send(`My connection string is: ${URL}`)
});

app.listen(PORT, () => {
    console.log(`✅ PORT: ${PORT} 🌟`)
});