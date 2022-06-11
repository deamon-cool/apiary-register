module.exports = (req, res) => {
  try {
    const { name, date, apiaryNumber } = req.body;

    if (typeof name !== 'string' || typeof date !== 'string' || typeof apiaryNumber !== 'number') {
      return res.status(400).send({ error: 'Nieprawidłowe dane.' });
    }

    
    // date DD.MM.YYYY validation
    // apiaryNumber 16-number validation

  } catch (err) {
    console.log(Date() + ' an error has occured \n' + err);
    return res.status(500).send({ error: 'Błąd api. Przepraszamy.' });
  }
}