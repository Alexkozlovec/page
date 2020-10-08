const navMenu = document.querySelector('.nav__menu');
const burgerButton = document.querySelector('.burger');

const contactForm = document.querySelector('.contact__form');
const userMessage = document.querySelector('.contact__textarea');
const contactSubmitBtn = document.querySelector('.contact__btn');

const feedbackForm = document.querySelector('.feedback__form');
const userComment = document.querySelector('.feedback__form_textarea');
const feedbackSubmitBtn = document.querySelector('.feedback__btn');
const comments = document.querySelector('.feedback__comments');
const commentAuthorName = document.querySelector('#feedback-name');


/* burger menu */
burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('burger__active');
  navMenu.classList.toggle('nav__menu_active');
});


/* ============= main page actions ============= */
if(document.body.classList.contains('main-page')){

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //This is just to demonstrate it works fine.
    if(checkInput(userMessage, contactSubmitBtn)){
      userMessage.value = '';
    }
  });
}

/* ============= articles page actions ============ */
if(document.body.classList.contains('articles-page')){
  feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if(checkInput(userComment, feedbackSubmitBtn)){
      addNewComment(userComment, commentAuthorName.value, userComment.value);
    }
  });
}
