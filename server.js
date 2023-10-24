const express = require('express');
require('dotenv').config();
const { BROWSER, GABRIEL, PORT } = process.env;

const app = express();

app.get('/', (_, res) => { res.send(`Hello ${BROWSER}`) });

app.get('/gabriel', (_, res) => { res.send(`Hello ${GABRIEL}`) });

app.listen(PORT, () => console.log("Listening"));
