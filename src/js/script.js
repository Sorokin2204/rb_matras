var swiperBanner = new Swiper('.swiper-container-banner', {
  pagination: {
    el: '.swiper-pagination-banner',
  },
});
var swiperCategory = new Swiper('.swiper-container-category', {
  autoHeight: true, //enable auto height
  navigation: {
    nextEl: '.swiper-button-next-category',
    prevEl: '.swiper-button-prev-category',
  },
  pagination: {
    el: '.swiper-pagination-category',
    type: 'progressbar',
  },
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  //   draggable: true,
  //   dragSize: 100,
  // },
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: false,
  breakpoints: {
    320: { slidesPerView: 'auto' },
    466: { slidesPerView: 3 },
    1174: { spaceBetween: 30 },
  },
});

// var swiperProductSimilar = undefined;

// function initSwiperProductSimilar() {
//   if (window.innerWidth > 769 && swiperProductSimilar == undefined) {
//     document
//       .querySelector('.product-similar__wrapper')
//       .classList.remove('product-list');
//     var swiperProductSimilar = new Swiper('.swiper-container-product-similar', {
//       // autoHeight: true,
//       navigation: {
//         nextEl: '.swiper-button-next-product-similar',
//         prevEl: '.swiper-button-prev-product-similar',
//       },

//       breakpoints: {
//         320: {
//           spaceBetween: 20,
//           loop: true,
//           slidesPerView: 'auto',
//         },

//         1174: { spaceBetween: 30, slidesPerView: 4 },
//       },
//     });
//   } else if (window.innerWidth <= 769 && swiperProductSimilar != undefined) {
//     swiperProductSimilar.destroy();
//     swiperProductSimilar = undefined;
//     document.querySelector('.swiper-wrapper').removeAttribute('style');
//     document.querySelector('.swiper-container').removeAttribute('style');
//   }
// }

// initSwiperProductSimilar();
// window.addEventListener('resize', initSwiperProductSimilar);

///ACCORDION
const items = document.querySelectorAll('.catalog__filter-head');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  let itemContent = this.nextSibling;
  let content = this.nextSibling;
  //   for (i = 0; i < items.length; i++) {
  //     let content = items[i].nextSibling;
  //     items[i].setAttribute('aria-expanded', 'false');
  //     items[i].nextSibling.setAttribute('aria-hidden', 'true');
  //     content.style.maxHeight = 0 + 'px';
  //   }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
    itemContent.setAttribute('aria-hidden', 'false');
    itemContent.style.maxHeight = content.scrollHeight + 'px';
  } else {
    this.setAttribute('aria-expanded', 'false');
    itemContent.setAttribute('aria-hidden', 'true');
    content.style.maxHeight = 0 + 'px';
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));
///RANGE SLIDER PRICE
const pricerangeSlider = document.getElementById('price-range-slider');
if (pricerangeSlider) {
  noUiSlider.create(pricerangeSlider, {
    start: [0, 258313],
    connect: true,
    step: 1,
    range: {
      min: [0],
      max: [258313],
    },
  });

  const pricerangeInput0 = document.getElementById(
    'price-range-slider-input-0',
  );
  const pricerangeInput1 = document.getElementById(
    'price-range-slider-input-1',
  );

  const pricerangeText0 = document.getElementById('price-range-slider-text-0');
  const pricerangeText1 = document.getElementById('price-range-slider-text-1');
  priceinputs = [pricerangeInput0, pricerangeInput1];
  pricetexts = [pricerangeText0, pricerangeText1];
  pricerangeSlider.noUiSlider.on('update', function (values, handle) {
    priceinputs[handle].value = Math.round(values[handle]);
    pricetexts[handle].innerHTML = Math.round(values[handle]);
  });

  const setPriceRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    pricerangeSlider.noUiSlider.set(arr);
  };

  priceinputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setPriceRangeSlider(index, e.currentTarget.value);
    });
  });
}

///RANGE SLIDER WIDTH
const widthrangeSlider = document.getElementById('width-range-slider');
if (widthrangeSlider) {
  noUiSlider.create(widthrangeSlider, {
    start: [60, 200],
    connect: true,
    step: 1,
    range: {
      min: [60],
      max: [200],
    },
  });
  const widthrangeInput0 = document.getElementById(
    'width-range-slider-input-0',
  );
  const widthrangeInput1 = document.getElementById(
    'width-range-slider-input-1',
  );

  const widthrangeText0 = document.getElementById('width-range-slider-text-0');
  const widthrangeText1 = document.getElementById('width-range-slider-text-1');
  widthinputs = [widthrangeInput0, widthrangeInput1];
  widthtexts = [widthrangeText0, widthrangeText1];
  widthrangeSlider.noUiSlider.on('update', function (values, handle) {
    widthinputs[handle].value = Math.round(values[handle]);
    widthtexts[handle].innerHTML = Math.round(values[handle]);
  });

  const setWidthRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    widthrangeSlider.noUiSlider.set(arr);
  };

  widthrangeSlider.setAttribute('disabled', true);

  widthinputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setWidthRangeSlider(index, e.currentTarget.value);
    });
  });
  widthrangeInput0.value = '';
  widthrangeInput1.value = '';
}

///RANGE SLIDER HEIGHT
const heightrangeSlider = document.getElementById('height-range-slider');
if (heightrangeSlider) {
  noUiSlider.create(heightrangeSlider, {
    start: [120, 200],
    connect: true,
    step: 1,
    range: {
      min: [120],
      max: [200],
    },
  });
  const heightrangeInput0 = document.getElementById(
    'height-range-slider-input-0',
  );
  const heightrangeInput1 = document.getElementById(
    'height-range-slider-input-1',
  );

  const heightrangeText0 = document.getElementById(
    'height-range-slider-text-0',
  );
  const heightrangeText1 = document.getElementById(
    'height-range-slider-text-1',
  );
  heightinputs = [heightrangeInput0, heightrangeInput1];
  heighttexts = [heightrangeText0, heightrangeText1];
  heightrangeSlider.noUiSlider.on('update', function (values, handle) {
    heightinputs[handle].value = Math.round(values[handle]);
    heighttexts[handle].innerHTML = Math.round(values[handle]);
  });

  const setheightRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    heightrangeSlider.noUiSlider.set(arr);
  };

  heightinputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setheightRangeSlider(index, e.currentTarget.value);
    });
  });
}

// const sort_checkbox = document.getElementById('sort_price');

// sort_checkbox.indeterminate = true;

// sort_checkbox.addEventListener('click', function (e) {
//   console.log(e.target.indeterminate);
//   if (e.checked == true) {
//     console.log('CHECK');
//   } else if (e.indeterminate == true) {
//     console.log('INDET');
//   } else {
//     console.log('DISABLE');
//   }
// });

// if (window.matchMedia('(max-width: 1200px)').matches) {
//   console.log('1200');
//   document.documentElement.style.setProperty('--bold-60', '40px');
// } else {
// }

///TABS

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelector('.product-one__tabs');
  const tabsBtn = document.querySelectorAll('.product-one__tabs-btn');
  const tabsContent = document.querySelectorAll('.product-one__tabs-content');

  if (tabs) {
    tabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('product-one__tabs-btn')) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsBtn.forEach((el) => {
          el.classList.remove('product-one__tabs-btn--active');
        });
        document
          .querySelector(`[data-tabs-path="${tabsPath}"]`)
          .classList.add('product-one__tabs-btn--active');
        tabsHandler(tabsPath);
      }

      if (e.target.classList.contains('product-one__tabs-arrow--prev')) {
        let activeBtn = document.querySelector(
          '.product-one__tabs-btn--active',
        );
        let activeParent = activeBtn.closest('.product-one__tabs-item');
        let previousParent = activeParent.previousElementSibling;

        if (previousParent) {
          let prevActive = previousParent.querySelector(
            '.product-one__tabs-btn',
          );
          tabsBtn.forEach((el) => {
            el.classList.remove('product-one__tabs-btn--active');
          });
          prevActive.classList.add('product-one__tabs-btn--active');

          let path = prevActive.dataset.tabsPath;
          tabsHandler(path);
        }
      }

      if (e.target.classList.contains('product-one__tabs-arrow--next')) {
        let activeBtn = document.querySelector(
          '.product-one__tabs-btn--active',
        );
        let activeParent = activeBtn.closest('.product-one__tabs-item');
        let nextParent = activeParent.nextElementSibling;

        if (nextParent) {
          let nextActive = nextParent.querySelector('.product-one__tabs-btn');
          tabsBtn.forEach((el) => {
            el.classList.remove('product-one__tabs-btn--active');
          });
          nextActive.classList.add('product-one__tabs-btn--active');

          let path = nextActive.dataset.tabsPath;
          tabsHandler(path);
        }
      }
    });
  }

  const tabsHandler = (path) => {
    tabsContent.forEach((el) => {
      el.classList.remove('product-one__tabs-content--active');
    });
    document
      .querySelector(`[data-tabs-target="${path}"]`)
      .classList.add('product-one__tabs-content--active');
  };
});

///CUSTOM SELECT
const productSelectInit = () => {
  const elemets = document.querySelectorAll('.product-one__select');

  elemets.forEach((element) => {
    new Choices(element, {
      searchEnabled: false,
    });
  });
};

const sortSelectInit = () => {
  const elemets = document.querySelectorAll('.catalog__sort-select-mobile');

  elemets.forEach((element) => {
    new Choices(element, {
      searchEnabled: false,
    });
  });
};

productSelectInit();
sortSelectInit();
// ///FILTER

// var filter = document.querySelector('.catalog__filter');
// var filterBtnOpen = document.querySelector('.catalog__sort-filter');
// var filterBtnClose = document.querySelector('.catalog__filter-btn-close');
// var filterBtnApply = document.querySelector('.catalog__filter-btn-apply');

// filterBtnOpen.addEventListener('click', () => {
//   filter.classList.add('catalog__filter--active');
//   document.body.style.overflow = 'hidden';
// });

// filterBtnClose.addEventListener('click', () => {
//   filter.classList.remove('catalog__filter--active');
//   document.body.style.overflow = 'auto';
// });

// filterBtnApply.addEventListener('click', () => {
//   filter.classList.remove('catalog__filter--active');
//   document.body.style.overflow = 'auto';
// });

// window.addEventListener('resize', () => {
//   if (window.innerWidth >= 1060) {
//     filter.classList.remove('catalog__filter--active');
//     document.body.style.overflow = 'visible';
//   } else {
//   }
// });
// ///MOBILE MENU
// let menu = document.querySelector('.nav--mobile');
// let menuCloseBtn = document.querySelector('.nav__close-btn');
// let menuOpenBtn = document.querySelector('.header__menu-btn');
// let overlay = document.querySelector('.overlay');

// menuOpenBtn.addEventListener('click', () => {
//   if (menu.classList.contains('nav--active')) {
//     DisableMenu();
//   } else {
//     ActiveMenu();
//   }
// });

// menuCloseBtn.addEventListener('click', () => {
//   DisableMenu();
// });

// overlay.addEventListener('click', () => {
//   DisableMenu();
// });

// function DisableMenu() {
//   menu.classList.remove('nav--active');
//   overlay.classList.remove('overlay--active');
//   menuOpenBtn.classList.remove('header__menu-btn--active');
//   document.body.style.overflow = 'auto';
// }

// function ActiveMenu() {
//   menu.classList.add('nav--active');
//   overlay.classList.add('overlay--active');
//   menuOpenBtn.classList.add('header__menu-btn--active');
//   document.body.style.overflow = 'hidden';
// }
// ///MOBILE MENU ACCORDION
// const navBtns = document.querySelectorAll('.nav__btn');

// function toggleAccordion() {
//   const itemToggle = this.getAttribute('aria-expanded');
//   let itemContent = this.nextSibling;
//   let content = this.nextSibling;
//   //   for (i = 0; i < items.length; i++) {
//   //     let content = items[i].nextSibling;
//   //     items[i].setAttribute('aria-expanded', 'false');
//   //     items[i].nextSibling.setAttribute('aria-hidden', 'true');
//   //     content.style.maxHeight = 0 + 'px';
//   //   }

//   if (itemToggle == 'false') {
//     this.setAttribute('aria-expanded', 'true');
//     itemContent.setAttribute('aria-hidden', 'false');
//     itemContent.style.maxHeight = content.scrollHeight + 'px';
//   } else {
//     this.setAttribute('aria-expanded', 'false');
//     itemContent.setAttribute('aria-hidden', 'true');
//     content.style.maxHeight = 0 + 'px';
//   }
// }
// navBtns.forEach((navBtn) => navBtn.addEventListener('click', toggleAccordion));
// ///MODALS

// const btns = document.querySelectorAll('.btn');
// const modalOverlay = document.querySelector('.modal-overlay ');
// const modals = document.querySelectorAll('.modal');
// const btnsClose = document.querySelectorAll('.modal__btn-close');

// btns.forEach((el) => {
//   el.addEventListener('click', (e) => {
//     let path = e.currentTarget.getAttribute('data-path');
//     let pathClose = e.currentTarget.getAttribute('data-path-close');

//     if (pathClose !== null) {
//       document
//         .querySelector(`[data-target="${pathClose}"]`)
//         .classList.remove('modal--visible');
//       modalOverlay.classList.remove('modal-overlay--visible');
//     }

//     if (path !== null) {
//       // modals.forEach((el) => {
//       //   el.classList.remove('modal--visible');
//       // });

//       document
//         .querySelector(`[data-target="${path}"]`)
//         .classList.add('modal--visible');
//       modalOverlay.classList.add('modal-overlay--visible');
//     }
//   });
// });

// modalOverlay.addEventListener('click', (e) => {
//   if (e.target == modalOverlay) {
//     modalOverlay.classList.remove('modal-overlay--visible');
//     modals.forEach((el) => {
//       el.classList.remove('modal--visible');
//     });
//   }
// });

// btnsClose.forEach((btnClose) => {
//   btnClose.addEventListener('click', (e) => {
//     modalOverlay.classList.remove('modal-overlay--visible');
//     modals.forEach((el) => {
//       el.classList.remove('modal--visible');
//     });
//   });
// });

///MOBILE MENU
let menu = document.querySelector('.nav--mobile');
let menuCloseBtn = document.querySelector('.nav__close-btn');
let menuOpenBtn = document.querySelector('.header__menu-btn');
let overlay = document.querySelector('.overlay');

menuOpenBtn.addEventListener('click', () => {
  if (menu.classList.contains('nav--active')) {
    DisableMenu();
  } else {
    ActiveMenu();
  }
});

menuCloseBtn.addEventListener('click', () => {
  DisableMenu();
});

overlay.addEventListener('click', () => {
  DisableMenu();
});

function DisableMenu() {
  menu.classList.remove('nav--active');
  overlay.classList.remove('overlay--active');
  menuOpenBtn.classList.remove('header__menu-btn--active');
  document.body.style.overflow = 'auto';
}

function ActiveMenu() {
  menu.classList.add('nav--active');
  overlay.classList.add('overlay--active');
  menuOpenBtn.classList.add('header__menu-btn--active');
  document.body.style.overflow = 'hidden';
}

///MOBILE MENU ACCORDION
const navBtns = document.querySelectorAll('.nav__btn');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  let itemContent = this.nextSibling;
  let content = this.nextSibling;
  //   for (i = 0; i < items.length; i++) {
  //     let content = items[i].nextSibling;
  //     items[i].setAttribute('aria-expanded', 'false');
  //     items[i].nextSibling.setAttribute('aria-hidden', 'true');
  //     content.style.maxHeight = 0 + 'px';
  //   }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
    itemContent.setAttribute('aria-hidden', 'false');
    itemContent.style.maxHeight = content.scrollHeight + 'px';
  } else {
    this.setAttribute('aria-expanded', 'false');
    itemContent.setAttribute('aria-hidden', 'true');
    content.style.maxHeight = 0 + 'px';
  }
}
navBtns.forEach((navBtn) => navBtn.addEventListener('click', toggleAccordion));

pathName = window.location.pathname;

switch (pathName) {
  case '/index.html':
    {
      ///FILTER
      console.log(pathName);
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
    }
    break;

  case '/product.html':
    {
      /// PRODUCT SIMILAR SLIDER
      var swiperProductSimilar = undefined;

      function initSwiperProductSimilar() {
        if (window.innerWidth > 769 && swiperProductSimilar == undefined) {
          document
            .querySelector('.product-similar__wrapper')
            .classList.remove('product-list');
          var swiperProductSimilar = new Swiper(
            '.swiper-container-product-similar',
            {
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
            },
          );
        } else if (
          window.innerWidth <= 769 &&
          swiperProductSimilar != undefined
        ) {
          swiperProductSimilar.destroy();
          swiperProductSimilar = undefined;
          document.querySelector('.swiper-wrapper').removeAttribute('style');
          document.querySelector('.swiper-container').removeAttribute('style');
        }
      }

      initSwiperProductSimilar();
      window.addEventListener('resize', initSwiperProductSimilar);
      ///DISABLE SELECT
      const selectSize = document.getElementById('select_size');
      //const selectChehol = selectSize.nextSibling;

      const choices = document.querySelectorAll('.choices');
      choices[1].classList.add('is-disabled');
      choices[1].style.pointerEvents = 'none';
      selectSize.addEventListener('change', () => {
        choices[1].classList.remove('is-disabled');
        choices[1].style.pointerEvents = 'auto';
      });
    }
    break;
  case '/ordering.html': {
    const orderingProductInit = () => {
      const elemets = document.querySelectorAll('.ordering-product__select');

      elemets.forEach((element) => {
        new Choices(element, {
          searchEnabled: false,
        });
      });
    };

    const orderingDiscountInit = () => {
      const elemets = document.querySelectorAll('.ordering-discount__select');

      elemets.forEach((element) => {
        new Choices(element, {
          searchEnabled: false,
        });
      });
    };

    orderingProductInit();
    orderingDiscountInit();

    const selects = document.querySelectorAll('select');
    selects.forEach((select) => {
      if (select.hasAttribute('data-name-option')) {
        nameSelect = select.getAttribute('data-name-option');
        choiceSelect = select.nextSibling;
        choiceSelect.setAttribute('data-name-option', nameSelect);
      }
    });

    ///DISABLE SELECT
    const selectSize = document.getElementById('select_size');
    //const selectChehol = selectSize.nextSibling;

    const choices = document.querySelectorAll('.choices');
    choices[1].classList.add('is-disabled');
    choices[1].style.pointerEvents = 'none';
    selectSize.addEventListener('change', () => {
      choices[1].classList.remove('is-disabled');
      choices[1].style.pointerEvents = 'auto';
    });
  }
  default:
    break;
}

///MODALS
console.log(pathName);
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
