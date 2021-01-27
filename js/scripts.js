const navbar = document.querySelector('.navbars');
window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add('sticky')
    : navbar.classList.remove('sticky');
};

/**** popup-ads ****/
let closeAds = document.querySelector('#close-ads');
let popAds = document.querySelector('#pop-ads');
let closeAds1 = document.querySelector('#close-ads1');
let popAds1 = document.querySelector('#pop-ads1');

setTimeout(() => {
  popAds.style.display = 'block';
}, 1000);

closeAds.addEventListener('click', () => {
  popAds.style.display = 'none';
});

setTimeout(() => {
  popAds1.style.display = 'block';
}, 1000);

closeAds1.addEventListener('click', () => {
  popAds1.style.display = 'none';
});

/**** gallery-page ****/

$(document).ready(function () {
  $('.list').click(function () {
    const value = $(this).attr('data-filters');
    if (value == 'all') {
      $('.itemBox').show('1000');
    } else {
      $('.itemBox')
        .not('.' + value)
        .hide('1000');
      $('.itemBox')
        .filter('.' + value)
        .show('1000');
    }
  });

  $('.list').click(function () {
    $(this).addClass('on').siblings().removeClass('on');
  });
});

/**** remittance ****/
var swiper = new Swiper('.remittance .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

/**** slider ****/

var swiper = new Swiper('.slider .swiper-container', {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/**** wow-animation-js ****/

new WOW().init();

/**** google-translate ****/

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'np',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    },
    'google_translate_element'
  );
}
