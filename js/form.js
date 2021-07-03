const formFieldset = document.querySelector('.ad-form').querySelectorAll('fieldset');
const getFiltersForm = document.querySelector('.map__filters');
const getFiltersSelects = getFiltersForm.querySelectorAll('select');
const getFeatures = getFiltersForm.querySelector('.map__features');

const activateForm = (inactive) => {
  formFieldset.forEach((item) => {
    item.disabled = inactive;
  });
  getFiltersSelects.forEach((item) => {
    item.disabled = inactive;
  });
  getFeatures.disabled = inactive;
  if (inactive) {
    document.querySelector('.ad-form').classList.add('ad-form--disabled');
    getFiltersForm.classList.add('map__filters--disabled');
  } else {
    document.querySelector('.ad-form').classList.remove('ad-form--disabled');
    getFiltersForm.classList.remove('map__filters--disabled');
  }
};

activateForm(false);

export {activateForm};
