const Apiary = require('../database/Apiary/Apiary');

let apiaries = [];

module.exports.apiaries = apiaries;

module.exports = (req, res) => {
  try {
    const { name, date, apiaryNumber } = req.body;

    apiaries.push(new Apiary(name, date, apiaryNumber));

    res.status.status(200).send({ info: 'Dodano pasiekę.' });
  } catch (err) {
    console.log(Date() + ' an error has occured \n' + err);
    return res.status(500).send({ error: 'Błąd api. Przepraszamy.' });
  }
}