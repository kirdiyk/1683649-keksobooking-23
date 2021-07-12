import './form.js';
import './map.js';
import './validation.js';
import './data.js';
import './fetch.js';

import { getData } from './fetch.js';
import {onFilter, addFilters} from './filter.js';

getData((promo) =>{
  onFilter(promo);
  addFilters(promo);
});
