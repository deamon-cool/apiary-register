export default function generateUserApiaryNumber(prevNumberString) {
  let number = parseInt(prevNumberString);
  number += 1;

  let numberString = number.toString();
  const length = numberString.length;

  if (length > 5) {
    numberString = '00001';
    
    return numberString;
  }

  const amountOfZeros = 5 - length;
  numberString = '0'.repeat(amountOfZeros) + numberString;

  return numberString;
}