import { HTTP_ADDRESS_GET, HTTP_ADDRESS_POST} from './const.js';
import { getMessage, SUCCESS, ERROR } from './handler.js';
import { showAlert, clearAdress, clearMap, clearForm } from './util.js';

const getData = (onSuccess) => {
  fetch(HTTP_ADDRESS_GET)
    .then((response) => response.json())
    .then((offers) => {
      onSuccess(offers);
    });
};

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

