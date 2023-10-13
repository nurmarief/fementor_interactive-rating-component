const reviewCardElement = document.querySelector('.review-card');
const reviewSectionElement = reviewCardElement.querySelector(
  '.review-card__section_type_review-section'
);
const thanksSectionElement = reviewCardElement.querySelector(
  '.review-card__section_type_thanks-section'
);
const showUserFeedbackElement = reviewCardElement.querySelector(
  '.review-card__show-user-feedback'
);

export function toggleThanksSectionElement() {
  thanksSectionElement.classList.toggle('review-card__section_is-hidden');
}

export function toggleReviewSectionElement() {
  reviewSectionElement.classList.toggle('review-card__section_is-hidden');
}

export function editTextShowUserFeedbackElement(text) {
  showUserFeedbackElement.textContent = text;
}
