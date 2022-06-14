export default function validateDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  let monthDuration = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
    monthDuration[1] = 29;
  }

  const today = new Date();

  if (day > monthDuration[month - 1] || day < 1 ||
    month > 12 || month < 1 || date > today) {
    return 'Nieprawidłowa data. Sprawdź dokładnie rok, miesiąc i dzień.';
  }

  return '';
}