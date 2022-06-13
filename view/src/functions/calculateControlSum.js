export default function calculateControlSum(dateString, userApiaryNumber) {
  if (dateString.length !== 8) {
    return '';
  }

  if (userApiaryNumber.length !== 5) {
    return '';
  }

  const apiaryNumberWithoutControlSumStr = [dateString, userApiaryNumber].join('');

  let computedNumber = parseInt(apiaryNumberWithoutControlSumStr);
  for (let i in apiaryNumberWithoutControlSumStr) {
    const num = parseInt(apiaryNumberWithoutControlSumStr[i]);
    if (num !== 0) {
      computedNumber *= num;
    }
  }

  const computedNumberStr = computedNumber.toString();

  const computedControlSum = computedNumberStr.charAt(1) +
    computedNumberStr.charAt(6) +
    computedNumberStr.charAt(computedNumberStr.length - 1);

  return computedControlSum;
}