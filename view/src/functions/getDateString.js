export default function getDateString() {
  const newDate = new Date();
  const monthString = newDate.getMonth().toString().length === 1 ?
    `0${newDate.getMonth() + 1}` : `${newDate.getMonth() + 1}`;
  const dayString = newDate.getDate().toString().length === 1 ?
    `0${newDate.getDate()}` : `${newDate.getDate()}`;
  const dateString = `${newDate.getFullYear()}-${monthString}-${dayString}`;

  return dateString;
}