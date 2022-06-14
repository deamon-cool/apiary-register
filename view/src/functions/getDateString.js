export default function getDateString(date) {
  const monthString = date.getMonth().toString().length === 1 ?
    `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
  const dayString = date.getDate().toString().length === 1 ?
    `0${date.getDate()}` : `${date.getDate()}`;
  const dateString = `${date.getFullYear()}-${monthString}-${dayString}`;

  return dateString;
}