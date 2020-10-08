const smoothScrollTo = href => href.scrollIntoView({behavior: "smooth"});

document.querySelectorAll('.anchor__link').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    smoothScrollTo(document.querySelector(item.getAttribute('href')));

    if(navMenu.classList.contains('nav__menu_active')){
      navMenu.classList.remove('nav__menu_active');
      burgerButton.classList.remove('burger__active');
    }
  });
});