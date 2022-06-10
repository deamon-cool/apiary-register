const express = require('express');
const path = require('path');
const config = require('./config/config.json');

const app = express();
app.use(express.static(path.join(__dirname, '../build')));

app.put('/api/add-new-apiary', (req, res) => console.log(res.body));

app.get('/api/get-apiaries', (req, res) => res.status(200).send(['pasieki']));

app.listen(config.API_PORT, () => console.log('Api runs on: 127.0.0.1:' + config.API_PORT));