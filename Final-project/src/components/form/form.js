import './form.scss';

const inputs = document.querySelectorAll('.form__input');
const formSearchIcons = document.querySelectorAll('.form__icon');

const onFocus = (evt) => {
  const label = evt.target.labels[0];
  label.classList.add('form__label--active');
};

const onBlur = (evt) => {
  const label = evt.target.labels[0];
  const value = evt.target.value;
  if (value === '') {
    label.classList.remove('form__label--active');
  }
};

inputs.forEach((element) => {
  element.addEventListener('focus', onFocus);
  element.addEventListener('blur', onBlur);
});

const onClickIcon = (evt) => {
  evt.preventDefault();
  const parent = evt.currentTarget.parentElement;
  const wrapper = parent.querySelector('.form__input-wrapper');
  wrapper.classList.remove('form__input-wrapper--hidden');
};

formSearchIcons.forEach((element) => {
  element.addEventListener('click', onClickIcon);
});

document.addEventListener