const addNewComment = (field, name, comment) => {

  let newComment = document.createElement('li');
  newComment.classList.add('feedback__comment');

  let author = document.createElement('div');
  author.classList.add('feedback__author');

  let authorName = document.createElement('a');
  authorName.textContent = name;

  let authorAvatar = document.createElement('img');
  authorAvatar.setAttribute('src', 'images/unauthorized.png');
  authorAvatar.setAttribute('alt', `комментарий ${authorName.textContent}`);
  authorAvatar.setAttribute('aria-hidden', true);

  let commentText = document.createElement('p');
  commentText.textContent = comment;

  author.append(authorAvatar);
  author.append(authorName);
  newComment.append(author);
  newComment.append(commentText);

  comments.append(newComment);
  field.value = '';
};