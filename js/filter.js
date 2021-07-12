import { MAX_PROMO_AMOUNT, PRICES } from './const.js';
import { createPromoMap } from './map.js';
import { debounce } from './utils/debounce.js';
import { markerGroup } from './map.js';

const mapFilters = document.querySelector('.map__filters');
const mapBoxFilters = document.querySelectorAll('.map__checkbox');
const houseTypeFilter = mapFilters.querySelector('#housing-type');
const housePriceFilter = mapFilters.querySelector('#housing-price');
const houseRoomFilter = mapFilters.querySelector('#housing-rooms');
const houseGuestsFilter = mapFilters.querySelector('#housing-guests');
const houseFeaturesFilter = mapFilters.querySelectorAll('.map__checkbox');

mapBoxFilters.forEach((houseFeatures) => {
  houseFeatures.checked = false;
});

const onFilter = (ads) => {
  const filteredPromo = ads.filter((ad) => {
    let result = true;
    if (houseTypeFilter.value !== 'any' && ad.offer.type !== houseTypeFilter.value) {
      result = false;
    }
    if (houseRoomFilter.value !== 'any' && ad.offer.rooms !== Number(houseRoomFilter.value)) {
      result = false;
    }
    if (houseGuestsFilter.value !== 'any' && ad.offer.guests !== Number(houseGuestsFilter .value)) {
      result = false;
    }
    if (housePriceFilter.value !== 'any') {
      if (housePriceFilter.value === 'middle' && (ad.offer.price < PRICES.low || ad.offer.price > PRICES.high)) {
        result = false;
      }
      if (housePriceFilter.value === 'low' &&  ad.offer.price > PRICES.low) {
        result = false;
      }
      if (housePriceFilter.value === 'high' &&  ad.offer.price < PRICES.high) {
        result = false;
      }
    }
    houseFeaturesFilter.forEach((feature) => {
      if (feature.checked && ad.offer.features && !ad.offer.features.includes(feature.value)) {
        result = false;
      }
    },
    );
    return result;
  });
  createPromoMap(filteredPromo.slice(0, MAX_PROMO_AMOUNT));
};

const addFilters = (ads) => {
  const debounced = debounce(() => {
    markerGroup.clearLayers();
    onFilter(ads);
  });
  houseTypeFilter.addEventListener('change', debounced);
  housePriceFilter.addEventListener('change', debounced);
  houseRoomFilter.addEventListener('change', debounced);
  houseGuestsFilter.addEventListener('change', debounced);
  houseFeaturesFilter.forEach((feature) => {
    feature.addEventListener('change', debounced);
  });
};

export {onFilter, addFilters, mapFilters};
