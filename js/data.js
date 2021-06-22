import getRandomRangeIntOrFloat from './utils.js';
import getRandomArrayElement from './util.js';
import createList from './util';
import { TYPES_ARRAY, TIMES_ARRAY, FESTURES_ARRAY, PHOTOS_ARRAY } from './const.js';

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

PromoArray;
