///FILTER

var filter = document.querySelector('.catalog__filter');
var filterBtnOpen = document.querySelector('.catalog__sort-filter');
var filterBtnClose = document.querySelector('.catalog__filter-btn-close');
var filterBtnApply = document.querySelector('.catalog__filter-btn-apply');

filterBtnOpen.addEventListener('click', () => {
  filter.classList.add('catalog__filter--active');
  document.body.style.overflow = 'hidden';
});

filterBtnClose.addEventListener('click', () => {
  filter.classList.remove('catalog__filter--active');
  document.body.style.overflow = 'auto';
});

filterBtnApply.addEventListener('click', () => {
  filter.classList.remove('catalog__filter--active');
  document.body.style.overflow = 'auto';
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1060) {
    filter.classList.remove('catalog__filter--active');
    document.body.style.overflow = 'visible';
  } else {
  }
});
