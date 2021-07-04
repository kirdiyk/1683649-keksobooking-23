const TYPES_ARRAY = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const TIMES_ARRAY = [
  '12:00',
  '13:00',
  '14:00',
];

const FESTURES_ARRAY = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS_ARRAY = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const MIN_LENGTH = 30;
const MAX_LENGTH = 100;
const MIN_PRICE = 0;
const MAX_PRICE = 1000000;
const MAX_ROOM = 100;

const PRICE_TYPE = {
  BUNGALOW: 0,
  FLAT: 1000,
  HOTEL: 3000,
  HOUSE: 5000,
  PALACE: 10000,
};

export {TYPES_ARRAY, TIMES_ARRAY, FESTURES_ARRAY, PHOTOS_ARRAY, MIN_LENGTH, MAX_LENGTH, MIN_PRICE, MAX_PRICE, MAX_ROOM, PRICE_TYPE};
