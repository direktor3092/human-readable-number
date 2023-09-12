module.exports = function toReadable (number) {

    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  const str = number.toString();
  const dozen = +str[1];
  const n = +str[2];

  if (number < 20) {
    return numbers[number];
  } else if (number < 100 && number % 10 !== 0) {
    return `${dozens[Math.floor(number / 10) - 1]} ${numbers[number % 10]}`
  } else if (number < 100 && number % 10 === 0) {
    return `${dozens[Math.floor(number / 10) - 1]}`
  } else if (number < 1000 && dozen !== 0 && dozen < 2) {
    return `${numbers[Math.floor(number / 100)]} hundred ${numbers[number % 100]}`;
  } else if (number < 1000 && dozen !== 0 && dozen > 1 && n === 0) {
    return `${numbers[Math.floor(number / 100)]} hundred ${dozens[dozen - 1]}`;
  }
  else if (number < 1000 && dozen !== 0 && dozen > 1) {
    return `${numbers[Math.floor(number / 100)]} hundred ${dozens[dozen - 1]} ${numbers[n]}`;
  } else if (number < 1000 && dozen === 0 && n !== 0) {
    return `${numbers[Math.floor(number / 100)]} hundred ${numbers[n]}`;
  } else if (number < 1000 && dozen === 0 && n === 0) {
    return `${numbers[Math.floor(number / 100)]} hundred`;
  }
}

