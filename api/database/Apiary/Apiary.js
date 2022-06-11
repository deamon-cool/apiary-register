const mongoose = require('mongoose');

const ApiarySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  apiaryNumber: {
    type: Number,
    required: true
  }
});

const Apiary = mongoose.model('Apiaries', ApiarySchema);

module.exports = Apiary;