//import { PromoArray } from './data.js';
//import { inserteData } from './util.js';

const map = document.querySelector('.map');
const mapCanvas = map.querySelector('#map-canvas'); //отрисовывает сгенерированный DOM-element
const userPopupTemplate = document.querySelector('#card').content.querySelector('.popup');

//словарь
const houseType = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

//const similarPromo = PromoArray;

const createPopup = (author, offer) => {
  const advertPopup = userPopupTemplate.cloneNode(true);
  offer.title ? advertPopup.querySelector('.popup__title').textContent = offer.title : advertPopup.querySelector('.popup__title').remove();
  offer.address ? advertPopup.querySelector('.popup__text--address').textContent = offer.address : advertPopup.querySelector('.popup__text--address').remove() ;
  offer.price ? advertPopup.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь` : advertPopup.querySelector('.popup__text--price').remove();
  offer.type ? advertPopup.querySelector('.popup__type').textContent = houseType[offer.type] : advertPopup.querySelector('.popup__type').remove();
  offer.rooms && offer.guests ? advertPopup.querySelector('.popup__text--capacity').textContent =  `${offer.rooms} комнаты для ${offer.guests} гостей` : advertPopup.querySelector('.popup__text--capacity').remove();
  offer.checkin && offer.checkout ? advertPopup.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}` : advertPopup.querySelector('.popup__text--time').remove();
  //? advertPopup.querySelector('.popup__description').textContent = (offer.description) ? advertPopup.querySelector('.popup__description').remove() : offer.description;
  // advertPopup.querySelector('.popup__avatar').src = (!offer.avatar) ? advertPopup.querySelector('.popup__avatar').remove() : offer.avatar;

  //const features = advertPopup.querySelector('.popup__features');

  if (offer.features) {
    const modifiers = (offer.features).map((feature) => `popup__feature--${feature}`);
    advertPopup.querySelectorAll('.popup__feature').forEach((item) => {
      const modifier = item.classList[1];
      if (!modifiers.includes(modifier)) {
        item.remove();
      }
    });
  } else {
    advertPopup.querySelector('.popup__features').classList.add('visually-hidden');
  }
  offer.description ? advertPopup.querySelector('.popup__description').textContent = offer.description : advertPopup.querySelector('.popup__description').classList.add('visually-hidden');
  if (offer.photos) {
    offer.photos.forEach((item) => {
      const img = advertPopup.querySelector('.popup__photo').cloneNode();
      img.setAttribute('src', item);
      advertPopup.querySelector('.popup__photos').appendChild(img);
    });
    advertPopup.querySelector('.popup__photo').remove();
  } else {
    advertPopup.querySelector('.popup__photos').classList.add('visually-hidden');
  }

  return advertPopup;
};

export {createPopup, mapCanvas, map};
