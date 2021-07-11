import './form.js';
import './map.js';
import './validation.js';
import './data.js';
import './fetch.js';

import { getData } from './fetch.js';
import {createPromoMap} from './map.js';

getData((promo) =>
  createPromoMap(promo),
);
