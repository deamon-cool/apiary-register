const Apiary = require('../database/Apiary/Apiary');

module.exports = async (req, res) => {
  try {
    const { date } = req.params;

    const apiaries = await Apiary.find({ date: date });

    res.status(200).send({ apiariesAmount: apiaries.length });
  } catch (err) {
    console.log(Date() + ' an error has occured \n' + err);
    return res.status(500).send({ error: 'Błąd api. Przepraszamy.' });
  }
}