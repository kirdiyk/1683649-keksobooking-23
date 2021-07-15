const mapFilters = document.querySelector('.map__filters');
const adForm = document.querySelector('.ad-form');

const sameValue = (currentValue, changeValue) => {
  changeValue.value = currentValue.value;
};

const clearForm = () => {
  adForm.reset();
  mapFilters.reset();
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.textContent = message;

  document.body.append(alertContainer);
  alertContainer.classList.add('alert-message');
  scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export {sameValue, showAlert, clearForm};
