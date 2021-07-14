import { HTTP_ADDRESS_GET, HTTP_ADDRESS_POST} from './const.js';
import { getMessage, SUCCESS, ERROR } from './handler.js';
import { showAlert, clearForm} from './util.js';
import { clearAdress} from './map.js';
import { clearAvatar } from './avatar.js';

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
        clearForm();
        clearAdress();
        clearAvatar();
      } else {
        getMessage(ERROR);
      }
    })
    .catch(() => showAlert());
};

export {getData, setData};

