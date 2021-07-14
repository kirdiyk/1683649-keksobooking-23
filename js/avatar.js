import { DEFAULT_AVA, PHOTOS_FORMAT, IMAGE_SIZE} from './const.js';

const choosenAva = document.querySelector('.ad-form__field input[type=file]');
const choosenPhoto = document.querySelector('.ad-form__upload input[type=file]');

const previewAvatar = document.querySelector('.ad-form-header__preview img');
const previewPhoto = document.querySelector('.ad-form__photo');
const previewPhotoContainer = document.querySelector('.ad-form__photo-container');


const avaLoader = (choosenFile, previewFile) => {
  choosenFile.addEventListener('change', () => {
    const file = choosenFile.files[0];
    const fileName = file.name.toLowerCase();
    const matches = PHOTOS_FORMAT.some((item) => fileName.endsWith(item));

    if (matches) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        previewFile.src = reader.result;
      });
      reader.readAsDataURL(file);
    }
  });
};

const drawImage = (result) => {
  const div = previewPhoto;
  const image = previewAvatar.cloneNode(true);
  image.width = IMAGE_SIZE;
  image.height = IMAGE_SIZE;
  image.src = result;
  div.appendChild(image);
  previewPhotoContainer.appendChild(div);
};

const photoLoader = () => {
  choosenPhoto.addEventListener('change', () => {
    const file = choosenPhoto.files[0];
    const fileName = file.name.toLowerCase();

    const matches = PHOTOS_FORMAT.some((item) => fileName.endsWith(item));

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        drawImage(reader.result);
      });

      reader.readAsDataURL(file);
    }
  });
};

const clearAvatar = () => {
  previewAvatar.src = DEFAULT_AVA;
};


export {avaLoader, photoLoader, clearAvatar, choosenAva, previewAvatar,  previewPhotoContainer};
