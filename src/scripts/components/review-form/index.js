import {
  toggleReviewSectionElement,
  toggleThanksSectionElement,
  editTextShowUserFeedbackElement,
} from '../review-card/index.js';

const reviewFormElement = document.querySelector('.form');
const radioButtonElement = reviewFormElement.querySelector(
  '.radio-input__input'
);

reviewFormElement.addEventListener('submit', e => {
  e.preventDefault();
  toggleReviewSectionElement();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  editTextShowUserFeedbackElement(`You selected ${formProps.rating} out of 5`);
  toggleThanksSectionElement();
});

radioButtonElement.addEventListener('invalid', () => {
  const radioButtonParentElement = radioButtonElement.closest('.form__field');
  const radioButtonErrorMessageElement =
    radioButtonParentElement.querySelector('.form__error-msg');
  radioButtonErrorMessageElement.classList.remove('form__error-msg_is-hidden');
});
