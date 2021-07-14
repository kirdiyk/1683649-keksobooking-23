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

const HTTP_ADDRESS_GET = 'https://23.javascript.pages.academy/keksobooking/data';
const HTTP_ADDRESS_POST = 'https://23.javascript.pages.academy/keksobooking';

const TOKYO_LAT_LNG = {
  lat: 35.68352,
  lng: 139.75245,
};

const MAP_ZOOM = 12;
const MAP_RADIUS = 6000;

const MAX_PROMO_AMOUNT = 10;

const PRICES = {
  low: 10000,
  high: 50000,
};

const PHOTOS_FORMAT = ['gif', 'jpg', 'jpeg', 'png'];
const DEFAULT_AVA = 'img/muffin-grey.svg';
const IMAGE_SIZE = 100;

export { MIN_PRICE, MAX_PRICE, MAX_ROOM, PRICE_TYPE, HTTP_ADDRESS_GET, HTTP_ADDRESS_POST};
export {TOKYO_LAT_LNG, MAP_ZOOM, MAP_RADIUS, MAX_PROMO_AMOUNT, PRICES, PHOTOS_FORMAT, DEFAULT_AVA, IMAGE_SIZE};
