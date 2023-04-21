let layoutHandler;

(function ($) {
    'use strict';
    let LayoutHandler = function () {
        let self = this;

        this.ready = function () {
            this.handleDOM();
            this.handleEvents();
        };

        this.handleDOM = function () {

        };

        this.handleEvents = function () {

        };
    };

    layoutHandler = new LayoutHandler();

    $(document).ready(function () {
        layoutHandler.ready();






        var swiper = new Swiper(".mySwiper", {
            speed: 2000,
            autoplay: {
                delay: 1300,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: false,
            },

        });


        //PureCounter start
        new PureCounter({
            selector: ".count",
            start: 0,
            end: 100,
            duration: 2,
            delay: 10,
            once: true,
            pulse: true,
            decimals: 0,
            legacy: true,
        });
        //PureCounter end


        //AOS Init start
        AOS.init({
        })
        //AOS Init end




    });
})(jQuery);





/* eslint-disable linebreak-style */
(function () {
  'use strict';
  // Your custom JavaScript goes here


  const hamburger = document.querySelector('.hamburger');
  const getNav = document.querySelector('.navigation');
  const getBody = document.querySelector('body');


  function addClass() {
    hamburger.addEventListener('click', () => {
      getNav.classList.toggle('show');
      // getBody.classList.toggle('over');
    });
  }
  addClass();


})();



