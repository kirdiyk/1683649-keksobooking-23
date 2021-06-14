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

const createPromo = () => {
  const LAT = getRandomRangeIntOrFloat (35.65000, 35.70000, 5);
  const LNG = getRandomRangeIntOrFloat (139.70000, 139.80000, 5);
  return {
    author: {
      avatar: `img/avatars/user0${  getRandomRangeIntOrFloat (1, 8)  }.png`,
    },
    offer:{
      title: 'Холостятская берлога',
      address: `${LAT}, ${LNG}`,
      price: getRandomRangeIntOrFloat (15000, 999000),
      type: getRandomArrayElement(TYPES_ARRAY),
      rooms: getRandomRangeIntOrFloat (1, 1200),
      guests: getRandomRangeIntOrFloat (1, 12),
      checkin: getRandomArrayElement(TIMES_ARRAY),
      checkout: getRandomArrayElement(TIMES_ARRAY),
      features: createList(FESTURES_ARRAY),
      description: 'Красиво жить не запретишь',
      photos: createList(PHOTOS_ARRAY),
    },
    location: {
      lat: LAT,
      lng: LNG,
    },
  };
};

const PromoArray = Array(10).fill('').map(() => createPromo());

console.log(PromoArray);
console.log(createPromo());

