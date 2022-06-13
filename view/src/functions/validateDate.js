export default function validateDate(dateString) {
  const splitedDateArr = dateString.split('-');
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
    return 'Nieprawidłowa data. Sprawdź dokładnie rok, miesiąc i dzień.';
  }

  return '';
}