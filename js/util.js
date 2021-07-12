// import { map } from './popup.js';
// import {TOKYO_LAT_LNG} from './const.js';
// import { mainMarker } from './map.js';
const mapFilters = document.querySelector('.map__filters');
const adForm = document.querySelector('.ad-form');

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

const sameValue = (currentValue, changeValue) => {
  changeValue.value = currentValue.value;
};

const clearForm = () => {
  adForm.reset();
  mapFilters.reset();
};

// const clearMap = () => {
//   map.closePopup();
//   //L.map('map-canvas').setView(TOKYO_LAT_LNG, 12);
//   mainMarker.setLatLng(TOKYO_LAT_LNG);
// };

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.textContent = message;

  document.body.append(alertContainer);
  alertContainer.classList.add('alert-message');
  scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export {getRandomRangeIntOrFloat, getRandomArrayElement, createList, sameValue, showAlert, clearForm};
