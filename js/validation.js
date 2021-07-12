import {MIN_PRICE, MAX_PRICE, MAX_ROOM, PRICE_TYPE, TOKYO_LAT_LNG} from './const.js';
import {sameValue} from './util.js';
import { setData } from './fetch.js';
import { clearAdress } from './map.js';
import { clearForm } from './util.js';

const formAddress = document.querySelector('#address');
formAddress.setAttribute('value', `${TOKYO_LAT_LNG.lat}, ${TOKYO_LAT_LNG.lng}`);


const formPrice = document.querySelector('#price');
formPrice.addEventListener('input', () => {
  const valuePrice = formPrice.value;
  if (valuePrice < MIN_PRICE) {
    formPrice.setCustomValidity(`Минимальная цена ${MIN_PRICE} ₽/ночь`);
  } else if (valuePrice > MAX_PRICE) {
    formPrice.setCustomValidity(
      `Максимальная цена превышается на ${valuePrice - MAX_PRICE}₽. Максимально возможная цена ${MAX_PRICE} ₽/ночь`,
    );
  } else {
    formPrice.setCustomValidity('');
  }

  formPrice.reportValidity();
});

const formRoom = document.querySelector('#room_number');
const formGuest = document.querySelector('#capacity');

const checkCapacity = (input) => {
  if (
    Number(formRoom.value) === MAX_ROOM && Number(formGuest.value) !== 0
  ) {
    input.setCustomValidity(`${MAX_ROOM} комнат нельзя выбрать для гостей!`);
  } else if (
    Number(formRoom.value) !== MAX_ROOM && Number(formGuest.value) === 0
  ) {
    input.setCustomValidity(
      `Не для гостей доступно только ${MAX_ROOM} комнат!`,
    );
  } else if (
    (Number(formRoom.value) !== MAX_ROOM) && Number(formGuest.value) !== 0 && Number(formRoom.value) < Number(formGuest.value)
  ) {
    input.setCustomValidity(
      'Количество гостей не должно превышать количество комнат!',
    );
  } else {
    input.setCustomValidity('');
  }
  input.reportValidity();
};

const formTimeIn = document.querySelector('#timein');
const formTimeOut = document.querySelector('#timeout');

formTimeIn.addEventListener('change', () =>
  sameValue(formTimeIn, formTimeOut),
);
formTimeOut.addEventListener('change', () =>
  sameValue(formTimeOut, formTimeIn),
);

const formTypeMatch = document.querySelector('#type');

formRoom.addEventListener('change', () => {
  if (formRoom.value < formGuest.value && formRoom.value !== MAX_ROOM){
    formGuest.value = formRoom.value;
  }
  checkCapacity(formRoom);
});
formGuest.addEventListener('change', () => {
  checkCapacity(formGuest);
});

formTypeMatch.addEventListener('change', () => {
  const value = PRICE_TYPE[formTypeMatch.value.toUpperCase()];
  switch (formTypeMatch.value) {
    case 'flat':
      formPrice.setAttribute('min', value);
      formPrice.setAttribute('placeholder', value);
      break;
    case 'bungalow':
      formPrice.setAttribute('min', value);
      formPrice.setAttribute('placeholder', value);
      break;
    case 'house':
      formPrice.setAttribute('min', value);
      formPrice.setAttribute('placeholder', value);
      break;
    case 'palace':
      formPrice.setAttribute('min', value);
      formPrice.setAttribute('placeholder', value);
      break;
    case 'hotel':
      formPrice.setAttribute('min', value);
      formPrice.setAttribute('placeholder', value);
      break;
  }
});

//так как не отобрабывают события на значения по умолчанию
const valueFlat = PRICE_TYPE[formTypeMatch.value.toUpperCase()];

if (formTypeMatch.value === 'flat') {
  formPrice.setAttribute('min', valueFlat);
}

if (formRoom.value !== MAX_ROOM && formRoom.value < formGuest.value) {
  formRoom.value = formGuest.value;
}

const form = document.querySelector('.ad-form');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(document.querySelector('.ad-form'));
  setData(formData);
});

form.addEventListener('reset', () => {
  clearForm();
  clearAdress();
});

