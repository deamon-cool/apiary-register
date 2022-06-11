const apiaries = require('../controllers/addNewApiaryController').apiaries;

module.exports = (req, res) => {
  try {
    res.status(200).send({ apiaries: apiaries });
  } catch (err) {
    console.log(Date() + ' an error has occured \n' + err);
    return res.status(500).send({ error: 'Błąd api. Przepraszamy.' });
  }
}