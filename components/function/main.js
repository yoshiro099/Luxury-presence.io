

document.addEventListener( 'DOMContentLoaded', function () {
    var main = new Splide( '#main-carousel', {
      type      : 'fade',
      rewind    : true,
      pagination: false,
      arrows    : false,
    } );
    
    var thumbnails = new Splide( '#thumbnail-carousel', {
      fixedWidth : 150,
      fixedHeight: 75,
      gap        : 10,
      rewind     : true,
      pagination : false,
      isNavigation: true,
      focus      : 'center',
      breakpoints: {
      600: {
        fixedWidth : 60,
        fixedHeight: 44,
      },
    },
  } );
  main.sync( thumbnails );
  main.mount();
  thumbnails.mount();
} );

const schedule = document.querySelector('.top__hours-container');
const toggle = document.getElementById('toggleHours');
const container = document.querySelector('.top__schedule');
const arrow = document.querySelector('.top__arrow');
const hoursDisplay = document.querySelector('.top__hours');
const days = document.querySelectorAll('.top__day');

const today = new Date().getDay(); // 0 = Sun, 1 = Mon, ...
const adjustedDay = today === 0 ? 6 : today - 1;

// highlight today
days[adjustedDay].classList.add('today');

// update "Open today" text to match today’s schedule
const todayHours = days[adjustedDay].querySelector('span').textContent;
hoursDisplay.textContent = todayHours;

// toggle dropdown
toggle.addEventListener('click', () => {
  container.classList.toggle('open');
  toggle.classList.toggle('active');
});