const dateTester = /^\d\d\d\d-\d\d\-\d\d$/;

module.exports = async (req, res, next) => {
  try {
    const { date } = req.params;

    if (!dateTester.test(date)) {
      return res.status(400).send({ error: 'Nieprawidłowy format daty (YYYY-MM-DD).' });
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

    next();
  } catch (err) {
    console.log(Date() + ' an error has occured \n' + err);
    return res.status(500).send({ error: 'Błąd api. Przepraszamy.' });
  }
}