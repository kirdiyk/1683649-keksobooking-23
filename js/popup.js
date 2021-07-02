import { PromoArray } from './data.js';
import { inserteData } from './util.js';

const mapCanvas = document.querySelector('#map-canvas'); //отрисовывает сгенерированный DOM-element

const userPopupTemplate = document.querySelector('#card').content.querySelector('.popup');

const houseType = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const popupFragment = document.createDocumentFragment();

const  createAdvert = ({offer, author}) => {
  const advertPopup = userPopupTemplate.cloneNode(true);
  advertPopup.querySelector('.popup__title').textContent = offer.title;
  advertPopup.querySelector('.popup__text--address').textContent = offer.address;
  advertPopup.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  advertPopup.querySelector('.popup__type').textContent = houseType[offer.type];
  advertPopup.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  advertPopup.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  advertPopup.querySelector('.popup__features').textContent = offer.features;
  advertPopup.querySelector('.popup__description').textContent = offer.description;
  advertPopup.querySelector('.popup__photo').src = offer.photos;
  advertPopup.querySelector('.popup__avatar').src = author.avatar;
};

const features = advertPopup.querySelector('.popup__features');

if (!offer.features) {
  features.remove();
} else {
  const featureElement = advertPopup.querySelectorAll('.popup__feature');
  const modifiers = (offer.features).map((feature) => `popup__feature--${feature}`);
  featureElement.forEach((item) => {
    const modifier = item.classList[1];

    if (!modifiers.includes(modifier)) {
      item.remove();
    }
  });
}

const photoListElement = advertPopup.querySelector('.popup__photos');
if (!offer.photos) {
  photoListElement.remove();
} else {
  photoListElement.querySelector('.popup__photo').remove();

  offer.photos.forEach((address) => {
    photoListElement.insertAdjacentHTML('beforeend', `<img src="${address}" class="popup__photo" width="45" height="40">`);
  });
}

// eslint-disable-next-line no-undef
popupFragment.appendChild(advertPopup); //добавляет во фрагмент объявление

inserteData(mapCanvas, popupFragment);

createAdvert(PromoArray[10]);
