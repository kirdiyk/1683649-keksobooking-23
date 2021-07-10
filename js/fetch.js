import { HTTP_ADDRESS_GET, HTTP_ADDRESS_POST} from './const.js';
import { getMessage, SUCCESS, ERROR } from './handler.js';
import { showAlert, clearMap, clearForm } from './util.js';
import { clearAdress} from './map.js';

// const getData = (onSuccess) => {
//   fetch(HTTP_ADDRESS_GET)
//     .then((response) => {
//       if (response.ok) {
//         return response;
//       }
//     })
//     .then((response) => response.json());
//.then((data) => {
// eslint-disable-next-line no-console

//createPromoMap(data.slice(0, 5));
//};
// eslint-disable-next-line no-console
// eslint-disable-next-line no-undef
//console.log(response.json());
// };

// eslint-disable-next-line no-console
// console.log(getData());

const getData = (onSuccess) => fetch(HTTP_ADDRESS_GET)
  .then((response) => response.json()) // получение данных с сервера
  .then((advert) => {
    onSuccess(advert);
  })
  .catch(() => {
    // eslint-disable-next-line no-console
    console.warn('При загрузке данных с сервера произошла ошибка!');
  });


const setData = (body) => {
  fetch(
    HTTP_ADDRESS_POST,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        getMessage(SUCCESS);
      } else {
        getMessage(ERROR);
      }
    })
    .then(() => clearAdress())
    .then(() => clearMap())
    .then(() => clearForm())
    .catch(() => showAlert());
};

export {getData, setData};

