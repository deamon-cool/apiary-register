const mongoose = require('mongoose');

const config = require('./config/config.json');

const Apiary = require('./database/Apiary/Apiary');

mongoose.connect(config.MONGO_PATH, { useNewUrlParser: true, useUnifiedTopology: true });
const database = mongoose.connection;
database.once('open', async () => {
  console.log('Connected to database.');

  let year = 2022;
  let month = 1;
  let day = 1;
  for (let i = 0; i < 60; i++) {
    let name = `Pasieka nr ${i}`;
    if (i % 10 === 0) {
      name = `Suuuuuuuuuuuuuuper Wieeeeeeelka Pasieka nr ${i} :)`;
    }

    const monthString = month.toString().length === 1 ?
      `0${month}` : month.toString();
    const dayString = day.toString().length === 1 ?
      `0${day}` : day.toString();
    const yearString = `${year}`;

    let dateString = `${yearString}-${monthString}-${dayString}`;

    month += 1;
    day += 1
    if (month === 7) {
      month = 1
    }
    if (day === 16) {
      day = 1
    }

    const randomFiveDigitNumber = (Math.random() * 100000).toFixed(0);
    const customDate = dateString.split('-').join('');
    const controlSum = calculateControlSum(customDate, randomFiveDigitNumber);
    let apiaryNumber = `${customDate}${randomFiveDigitNumber}${controlSum}`;

    await Apiary.create({
      name: name,
      date: dateString,
      apiaryNumber: apiaryNumber
    });
  }

  console.log('Created test database.')
});

function calculateControlSum(dateString, userApiaryNumber) {
  const apiaryNumberWithoutControlSumStr = [dateString, userApiaryNumber].join('');

  let computedNumber = parseInt(apiaryNumberWithoutControlSumStr);
  for (let i in apiaryNumberWithoutControlSumStr) {
    const num = parseInt(apiaryNumberWithoutControlSumStr[i]);
    if (num !== 0) {
      computedNumber *= num;
    }
  }

  const computedNumberStr = computedNumber.toString();

  const computedControlSum = computedNumberStr.charAt(1) +
    computedNumberStr.charAt(6) +
    computedNumberStr.charAt(computedNumberStr.length - 1);

  return computedControlSum;
}