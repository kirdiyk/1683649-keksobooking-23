const checkValue = (firstValue, secondValue) => (!((firstValue < 0 && secondValue < 0) || (secondValue < firstValue)));

//for integer use two parametrs,for float use 3 paramerts
const getRandomRangeIntOrFloat = (firstValue, secondValue, fixValue) => {
  if (checkValue (firstValue, secondValue)) {
    let number = (Math.random() * (secondValue - firstValue))+firstValue;
    const numberAbs = Math.abs(number);
    // eslint-disable-next-line no-nested-ternary
    (number < 0) && (numberAbs <= secondValue) ? (number = numberAbs) : (number >= 0) && (number <= secondValue) ? number : number = secondValue;
    return number.toFixed(fixValue);
  }
  return 'Значения не могут быть отрицательными и диaпазон должен быть указан в формате: (Меньшее число, Большее число, (при необходимости число равное количеству знаков после запятой)';
};

getRandomRangeIntOrFloat (2, -0.94, 1);


const getRandomArrayElement = (elements) => elements[getRandomRangeIntOrFloat(0, elements.length - 1)];

const createList = (elements) => {
  const randomArrayValue = getRandomRangeIntOrFloat(1, 5);
  return elements.slice(0, randomArrayValue);
};

const inserteData = (newBlock, fragment) => newBlock.appendChild(fragment); //вставляет новвое объявление в разметку

export {getRandomRangeIntOrFloat, getRandomArrayElement, createList, inserteData};
