const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const config = require('./config/config.json');

const addNewApiaryController = require('./controllers/addNewApiaryController');
const getApiariesController = require('./controllers/getApiariesController');

const apiaryValidation = require('./middlewares/apiaryValidation');

mongoose.connect(config.MONGO_PATH, { useNewUrlParser: true, useUnifiedTopology: true });
const database = mongoose.connection;
database.once('open', () => {
  console.log('Connected to database.');
});

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../build')));

app.put('/api/add-new-apiary', apiaryValidation, addNewApiaryController);

app.get('/api/get-apiaries', getApiariesController);

app.listen(config.API_PORT, () => console.log('Api runs on: 127.0.0.1:' + config.API_PORT));