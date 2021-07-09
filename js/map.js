import { activateForm } from './form.js';
import { createPopup, similarPromo } from './popup.js';
//import {TOKYO_LAT_LNG} from '/.const';

const address = document.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
    activateForm(false);
  })
  .setView(
    {
      lat: 35.68352,
      lng: 139.75245,
    }, 12,
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

mainMarker.on('moveend', (evt) => {
  const userCoordinate = evt.target.getLatLng();
  const lat = userCoordinate.lat.toFixed(5);
  const lng = userCoordinate.lng.toFixed(5);
  address.value = `${lat},  ${lng}`;
});

const searchArea = L.circle( {
  lat: 35.6952,
  lng: 139.757,
}, {
  color: 'pink',
  fillColor: 'orange',
  fillOpacity: 0.3,
  radius: 10000,
});
searchArea.addTo(map);

const resetButton = document.querySelector('.ad-form__reset');
resetButton.addEventListener('click', () => {
  mainMarker.setLatLng({
    lat: 35.6952,
    lng: 139.757,
  });
  map.setView(
    {
      lat: 35.68954,
      lng: 139.69171,
    },
    10,
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

similarPromo.forEach((objectPromo) => {
  createMarker(objectPromo.avatar, objectPromo.offer, objectPromo.location);
});

export {mainMarker};
