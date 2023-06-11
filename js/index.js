window.addEventListener("DOMContentLoaded", (event) => {
  let burger = document.querySelector('.burger');
  let menu = document.querySelector('.header__nav');
  let menuLinks = menu.querySelectorAll('.nav__link');

  let searchBtn = document.querySelector('.search-btn');
  let searchField = document.querySelector('.search-field');
  let closeSFBtn = document.querySelector('.search-field__close-btn');

  let stepsBtn = document.querySelectorAll('.steps__btn');
  let workinfoItem = document.querySelectorAll('.work-info__wrapper');

  burger.addEventListener('click',
    function () {
      burger.classList.toggle('burger_active');
      menu.classList.toggle('header__nav_active');
      document.body.classList.toggle('stop-scroll');
    })

  menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {
      burger.classList.remove('burger_active');
      menu.classList.remove('header__nav_active');
      document.body.classList.remove('stop-scroll');
    })
  })

  searchBtn.addEventListener('click',
    function () {
      searchField.classList.toggle('search-field_active')
    })

  closeSFBtn.addEventListener('click',
    function () {
      searchField.classList.remove('search-field_active')
    })

  stepsBtn.forEach(function(element) {
    element.addEventListener('click', function(e) {
      const path = e.currentTarget.dataset.path;

      stepsBtn.forEach(function(btn) {
        btn.classList.remove('steps__btn_active')
      });

      e.currentTarget.classList.add('steps__btn_active');

      workinfoItem.forEach(function(element) {
        element.classList.remove('work-info__wrapper_active')
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('work-info__wrapper_active');
    })
  })

  const swiper = new Swiper('.swiper', {
    currentClass: '.swuper-pagination-current',
    totalClass: '.swuper-pagination-total',
    speed: 500,
    loop: false,
    autoplay: {
      delay: 5000,
    },
  });

  new Accordion('.accordion-list', {
    elementClass: 'accordion',
    triggerClass: 'accordion__control',
    panelClass: 'accordion__content',
    activeClass: 'accordion_active',
  });
});

