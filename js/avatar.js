import { DEFAULT_AVA, PHOTOS_FORMAT, IMAGE_SIZE} from './const';

const previevContainer = document.querySelector('.ad-form__photo-container');

const choosenAva = document.querySelector('.ad-form__field input[type=file]');
const choosenPhoto = document.querySelector('.ad-form__upload input');

const previewAvatar = document.querySelector('.ad-form-header__preview img');
const previewPhoto = document.querySelector('.ad-form__photo img');


const addImg = (result) => {
  const div = previewPhoto;
  const img = previewAvatar.cloneNode(true);
  img.src = result;
  img.width = IMAGE_SIZE;
  img.height = IMAGE_SIZE;
  div.appendChild(img);
  previevContainer.appendChild(div);
};

const photoLoader = (choosenFile) => {
  choosenFile.addEventListener('change', () => {
    const file = choosenFile.files[0];
    const fileName = file.name.toLowerCase();
    const matches = PHOTOS_FORMAT.some((item) => fileName.endsWith(item));

    if (matches) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        addImg(reader.result);
      });
      reader.readAsDataURL(file);
    }
  });
};

const resetAvatar = () => {
  previewAvatar.src = DEFAULT_AVA;
};


export { photoLoader, resetAvatar, choosenPhoto, choosenAva, previewAvatar, previewPhoto};
