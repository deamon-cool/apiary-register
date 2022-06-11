const Apiary = require('../database/Apiary/Apiary');

module.exports = async (req, res) => {
  try {
    const apiaries = await Apiary.find();

    res.status(200).send({ apiaries: apiaries });
  } catch (err) {
    console.log(Date() + ' an error has occured \n' + err);
    return res.status(500).send({ error: 'Błąd api. Przepraszamy.' });
  }
}