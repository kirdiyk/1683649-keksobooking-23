function checkValue (firstValue, secondValue) {
  return ((firstValue < 0 && secondValue < 0) || (secondValue < firstValue)) ? false : true;
}

function getRandomRange (firstValue, secondValue, fixValue) {
  if (checkValue (firstValue, secondValue)) {
    let number = (Math.random() * (secondValue - firstValue))+firstValue;
    const numberAbs = Math.abs(number);
    (number < 0) && (numberAbs <= secondValue) ? (number = numberAbs) : (number >= 0) && (number <= secondValue) ? number : number = secondValue;
    if (fixValue > 0) {
      return [number.toFixed(fixValue), fixValue];
    }
    return number.toFixed(fixValue);
  }
  return 'Значения не могут быть отрицательными и диaпазон должен быть указан в формате: (Меньшее число, Большее число, (при необходимости число равное количеству знаков после запятой)';
}

getRandomRange (2, 3);


