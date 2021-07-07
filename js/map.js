import { activateForm } from './form.js';
import { getRandomRangeIntOrFloat } from './util.js';
import {PromoArray} from './data.js';
//import {createPopup} from './popup';
const address = document.querySelector('#address');
const latRandom = getRandomRangeIntOrFloat(35.65, 35.7, 5);
const lngRandom = getRandomRangeIntOrFloat(139.7, 139.8, 5);

const map = L.map('map-canvas')
  .on('load', () => {
    activateForm(false);
  })
  .setView(
    {
      lat: 35.68352,
      lng: 139.75245,
    },
    10,
  );
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const mainIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const alternativeIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(
  {
    lat: 35.6952,
    lng: 139.757,
  },
  {
    draggable: true,
    icon: mainIcon,
  },
);
mainMarker.addTo(map);

const alternativeMarker = L.marker(
  {
    lat: latRandom,
    lng: lngRandom,
  },
  {
    draggable: true,
    icon: alternativeIcon,
  },
);
alternativeMarker.addTo(map);

const resetButton = document.querySelector('.ad-form__reset');
resetButton.addEventListener('click', () => {
  mainMarker.setLatLng({
    lat: 35.6952,
    lng: 139.757,
  });
  alternativeMarker.remove();
  map.setView(
    {
      lat: 35.68954,
      lng: 139.69171,
    },
    10,
  );
});

mainMarker.on('moveend', (evt) => {
  const coordinates = evt.target.getLatLng();
  const lat = coordinates.lat.toFixed(5);
  const lng = coordinates.lng.toFixed(5);
  address.value = `${lat},  ${lng}`;
});

const markers = PromoArray(10);

// markers.forEach((item) => {
//   const marker = L.marker(
//     {
//       lat: item.offer.location.lat,
//       lng: item.offer.location.lng,
//     },
//     { icon: alternativeIcon },
//   );

//   marker.addTo(map);
// });

// eslint-disable-next-line no-unused-vars
const createMarkers = (arr) => {
  markers.forEach((obj) => {
    const marker = L.marker(
      {
        lat: obj.offer.location.lat,
        lng: obj.offer.location.lng,
      },
      { icon: alternativeIcon },
    );

similarPromo.forEach((objectPromo) => {
  createMarker(objectPromo.avatar, objectPromo.offer, objectPromo.location);
});
