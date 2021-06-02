///MODALS

const btns = document.querySelectorAll('.btn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');
const btnsClose = document.querySelectorAll('.modal__btn-close');

btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');
    let pathClose = e.currentTarget.getAttribute('data-path-close');

    if (pathClose !== null) {
      document
        .querySelector(`[data-target="${pathClose}"]`)
        .classList.remove('modal--visible');
      modalOverlay.classList.remove('modal-overlay--visible');
    }

    if (path !== null) {
      // modals.forEach((el) => {
      //   el.classList.remove('modal--visible');
      // });

      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add('modal--visible');
      modalOverlay.classList.add('modal-overlay--visible');
    }
  });
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });
  }
});

btnsClose.forEach((btnClose) => {
  btnClose.addEventListener('click', (e) => {
    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });
  });
});

/// PRODUCT SIMILAR SLIDER
var swiperProductSimilar = undefined;

function initSwiperProductSimilar() {
  if (window.innerWidth > 769 && swiperProductSimilar == undefined) {
    document
      .querySelector('.product-similar__wrapper')
      .classList.remove('product-list');
    var swiperProductSimilar = new Swiper('.swiper-container-product-similar', {
      // autoHeight: true,
      navigation: {
        nextEl: '.swiper-button-next-product-similar',
        prevEl: '.swiper-button-prev-product-similar',
      },

      breakpoints: {
        320: {
          spaceBetween: 20,
          loop: true,
          slidesPerView: 'auto',
        },

        1174: { spaceBetween: 30, slidesPerView: 4 },
      },
    });
  } else if (window.innerWidth <= 769 && swiperProductSimilar != undefined) {
    swiperProductSimilar.destroy();
    swiperProductSimilar = undefined;
    document.querySelector('.swiper-wrapper').removeAttribute('style');
    document.querySelector('.swiper-container').removeAttribute('style');
  }
}

initSwiperProductSimilar();
window.addEventListener('resize', initSwiperProductSimilar);

const selectSize = document.getElementById('select_size');
//const selectChehol = selectSize.nextSibling;

const choices = document.querySelectorAll('.choices');
choices[1].classList.add('is-disabled');
console.log(choices[1]);
selectSize.addEventListener('change', () => {
  choices[1].classList.remove('is-disabled');
});
