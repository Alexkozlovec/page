const likeButton = document.querySelector('.like-follow__like_button');
const likesCounter = document.querySelector('.like-follow__like_counter');

likeButton.addEventListener('click', () => {
  if(likeButton.hasAttribute('data-liked')){
    likesCounter.textContent--;
  } else{
    likesCounter.textContent++;
  }
  likeButton.toggleAttribute('data-liked');
});