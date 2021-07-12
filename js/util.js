import { map } from './popup.js';
import {formGuest, formPrice, formTypeMatch, formTimeIn, formTimeOut} from './validation.js';
import {TOKYO_LAT_LNG, DEFAULT_ROOMS_GUESTS} from './const.js';
import { mainMarker } from './map.js';
//import { mapFilters } from './filter.js';
const mapFilters = document.querySelector('.map__filters');

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


const defaultRoomGuests = () => {
  //formRoom.setAttribute('value', `${DEFAULT_ROOMS_GUESTS}`);
  const formRoom = document.querySelector('#room_number');
  formRoom.setAttribute('value', `${DEFAULT_ROOMS_GUESTS}`);
  //formRoom.value = 3;
};

const clearForm = () => {
  defaultRoomGuests();
  //formGuest.reset();
  formPrice.reset;
  formTimeIn.reset;
  formTimeOut.reset;
  formTypeMatch.reset;
  mapFilters.reset;
};


const clearMap = () => {
  map.closePopup;
  map.setView(TOKYO_LAT_LNG, 12);
  mainMarker.setLatLng(TOKYO_LAT_LNG);
};

// const clearFilters = () => {

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

const inserteData = (newBlock, fragment) => newBlock.appendChild(fragment); //вставляет новвое объявление в разметку


export {getRandomRangeIntOrFloat, getRandomArrayElement, createList, inserteData, sameValue, showAlert, clearMap, clearForm};
