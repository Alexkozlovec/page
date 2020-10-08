const categoriesList = document.querySelector('.articles__tags');
const articles = document.querySelectorAll('.article-preview');


categoriesList.addEventListener('change', () => {
  articles.forEach(item => {
    if(item.dataset.category !== categoriesList.value && categoriesList.value !== 'all'){
      item.classList.add('display-none');
    } else{
      item.classList.remove('display-none');
    }
  });
});