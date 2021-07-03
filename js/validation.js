import {MIN_LENGTH, MAX_LENGTH, MIN_PRICE, MAX_PRICE, MAX_ROOM} from './const.js';

const formTitle = document.querySelector('#title');
formTitle.addEventListener('input', () => {
  const valueLength = formTitle.value.length;
  if (valueLength < MIN_LENGTH) {
    formTitle.setCustomValidity(
      `Необходимо дописать ${MIN_LENGTH - valueLength} символ. Минимальная длина ${MIN_LENGTH}`,
    );
  } else if (valueLength > MAX_LENGTH) {
    formTitle.setCustomValidity(
      `Сократите длину заголовка на ${valueLength - MAX_LENGTH} символ. Максимальная длина ${MAX_LENGTH}`,
    );
  } else {
    formTitle.setCustomValidity('');
  }

  formTitle.reportValidity();
});

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

formRoom.addEventListener('change', () => {
  checkCapacity(formRoom);
});
formGuest.addEventListener('change', () => {
  checkCapacity(formGuest);
});

