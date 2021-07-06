//import { PromoArray } from './data.js';
//import { inserteData } from './util.js';

//const map = document.querySelector('.map');
//const mapCanvas = document.querySelector('#map-canvas'); //отрисовывает сгенерированный DOM-element
//const userPopupTemplate = document.querySelector('#card').content.querySelector('.popup');

//словарь
const houseType = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const popupFragment = document.createDocumentFragment();

const createPopup = ({offer, author}) => {
  const advertPopup = userPopupTemplate.cloneNode(true);
  advertPopup.querySelector('.popup__title').textContent = (!offer.title) ? advertPopup.querySelector('.popup__title').remove() : offer.title;
  advertPopup.querySelector('.popup__text--address').textContent = (!offer.address) ? advertPopup.querySelector('.popup__text--address').remove() : offer.address;
  advertPopup.querySelector('.popup__text--price').textContent = (!offer.price) ? advertPopup.querySelector('.popup__text--price').remove() : `${offer.price} ₽/ночь`;
  advertPopup.querySelector('.popup__type').textContent = (!offer.type) ? advertPopup.querySelector('.popup__type').remove() : houseType[offer.type];
  advertPopup.querySelector('.popup__text--capacity').textContent = (!offer.rooms || !offer.guests) ? advertPopup.querySelector('.popup__text--capacity').remove() : `${offer.rooms} комнаты для ${offer.guests} гостей`;
  advertPopup.querySelector('.popup__text--time').textContent = (!offer.checkin || !offer.checkout) ?   advertPopup.querySelector('.popup__text--time').remove(): `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  advertPopup.querySelector('.popup__description').textContent = (!offer.description) ? advertPopup.querySelector('.popup__description').remove() : offer.description;
  advertPopup.querySelector('.popup__avatar').src = (!author.avatar) ? advertPopup.querySelector('.popup__avatar').remove() : author.avatar;

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
      photoListElement.insertAdjacentHTML('beforeend', `<img src="${address}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`);
    });
  }

  //popupFragment.appendChild(advertPopup); //добавляет во фрагмент объявление

  //inserteData(mapCanvas, popupFragment);
};

createPopup(PromoArray[9]);
