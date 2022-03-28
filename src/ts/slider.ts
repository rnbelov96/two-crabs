const swiper = new Swiper('.shop__slider', {
  spaceBetween: 30,
  navigation: {
    nextEl: '.shop__slider-btn_next',
    prevEl: '.shop__slider-btn_prev',
  },
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    1270: {
      slidesPerView: 3,
    },
    930: {
      slidesPerView: 2,
    },
  },
});

const swiper2 = new Swiper('.support__slider', {
  spaceBetween: 30,
  navigation: {
    nextEl: '.support__slider-btn_next',
    prevEl: '.support__slider-btn_prev',
  },
  slidesPerView: 1,
  autoHeight: true,
  loop: true,
  breakpoints: {
    1270: {
      slidesPerView: 2,
    },
    650: {
      autoHeight: false,
    }
  },
});
