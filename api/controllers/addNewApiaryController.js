const Apiary = require('../database/Apiary/Apiary');

module.exports = async (req, res) => {
  try {
    const { name, date, apiaryNumber } = req.body;

    await Apiary.create({
      name: name,
      date: date,
      apiaryNumber: apiaryNumber
    });

    res.status(200).send({ info: 'Dodano pasiekę.' });
  } catch (err) {
    console.log(Date() + ' an error has occured \n' + err);
    return res.status(500).send({ error: 'Błąd api. Przepraszamy.' });
  }
}