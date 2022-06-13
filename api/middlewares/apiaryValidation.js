const Apiary = require('../database/Apiary/Apiary');

const dateTester = /^\d\d\d\d-\d\d\-\d\d$/;

module.exports = async (req, res, next) => {
  try {
    const { name, date, apiaryNumber } = req.body;

    if (typeof name !== 'string' || typeof date !== 'string' || typeof apiaryNumber !== 'number') {
      return res.status(400).send({ error: 'Nieprawidłowe dane.' });
    }

    const apiary = await Apiary.findOne({ date: date, apiaryNumber: apiaryNumber });
    if (apiary) {
      return res.status(400).send({ error: 'Pasieka o tej dacie i tym numerze już istnieje.' });
    }

    if (name.length > 100) {
      return res.status(400).send({ error: 'Nazwa jest za długa.' });
    }

    if (!dateTester.test(date)) {
      return res.status(400).send({ error: 'Nieprawidłowy format daty.' });
    }

    const splitedDateArr = date.split('-');
    const year = parseInt(splitedDateArr[0]);
    const month = parseInt(splitedDateArr[1]);
    const day = parseInt(splitedDateArr[2]);

    let monthDuration = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
      monthDuration[1] = 29;
    }

    if (day > monthDuration[month - 1] || day < 1 ||
      month > 12 || month < 1 ||
      year > (new Date()).getFullYear()) {
      return res.status(400).send({ error: 'Nieprawidłowa data. Sprawdź dokładnie rok, miesiąc i dzień.' });
    }

    const apiaryNumberStr = apiaryNumber.toString();

    if (apiaryNumberStr.length !== 16) {
      return res.status(400).send({ error: 'Nieprawidłowy numer pasieki.' });
    }

    const apiaryNumberYear = parseInt(apiaryNumberStr.slice(0, 4));
    const apiaryNumberMonth = parseInt(apiaryNumberStr.slice(4, 6));
    const apiaryNumberDay = parseInt(apiaryNumberStr.slice(6, 8));
    const apiaryNumberWithoutControlSumStr = apiaryNumberStr.slice(0, 13);
    const apiaryNumberControlSum = parseInt(apiaryNumberStr.slice(13, 16));

    let computedNumber = parseInt(apiaryNumberWithoutControlSumStr);
    for (let i in apiaryNumberWithoutControlSumStr) {
      const num = parseInt(apiaryNumberWithoutControlSumStr[i]);
      if (num !== 0) {
        computedNumber *= num;
      }
    }

    const computedNumberStr = computedNumber.toString();

    const computedControlSum = parseInt(
      computedNumberStr.charAt(1) +
      computedNumberStr.charAt(6) +
      computedNumberStr.charAt(computedNumberStr.length - 1)
    );

    if (apiaryNumberDay !== day ||
      apiaryNumberMonth !== month ||
      apiaryNumberYear !== year ||
      apiaryNumberControlSum !== computedControlSum) {
      return res.status(400).send({ error: 'Nieprawidłowy numer pasieki.' });
    }

    next();
  } catch (err) {
    console.log(Date() + ' an error has occured \n' + err);
    return res.status(500).send({ error: 'Błąd api. Przepraszamy.' });
  }
}