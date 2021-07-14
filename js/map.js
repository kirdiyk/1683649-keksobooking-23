import { activateForm } from './form.js';
import { createPopup } from './popup.js';
import {TOKYO_LAT_LNG, MAP_ZOOM, MAP_RADIUS} from './const.js';

const address = document.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
    activateForm(false);
  })
  .setView(
    TOKYO_LAT_LNG, MAP_ZOOM,
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

const mainMarker = L.marker(
  TOKYO_LAT_LNG,
  {
    draggable: true,
    icon: mainIcon,
  },
);

mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
  const userCoordinate = evt.target.getLatLng();
  const lat = userCoordinate.lat.toFixed(5);
  const lng = userCoordinate.lng.toFixed(5);
  address.value = `${lat},  ${lng}`;
});

const searchArea = L.circle( TOKYO_LAT_LNG, {
  color: 'pink',
  fillColor: 'orange',
  fillOpacity: 0.3,
  radius: MAP_RADIUS,
});
searchArea.addTo(map);

const resetButton = document.querySelector('.ad-form__reset');
resetButton.addEventListener('click', () => {
  mainMarker.setLatLng(TOKYO_LAT_LNG);
  map.setView(
    TOKYO_LAT_LNG,
    MAP_ZOOM,
  );
  searchArea.remove();
});

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (avatar, offer, point) => {
  const {lat, lng} = point;

  const icon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(markerGroup)
    .bindPopup(
      createPopup(avatar, offer),
      {
        keepInView: true,
      },
    );
};

const createPromoMap = (data) => {
  data.forEach((objectPromo) => {
    createMarker(objectPromo.avatar, objectPromo.offer, objectPromo.location);

  });
};

const clearAdress = () => {
  address.value = `${TOKYO_LAT_LNG.lat}, ${TOKYO_LAT_LNG.lng}`;
};

export {mainMarker, clearAdress, createMarker, createPromoMap, markerGroup};
