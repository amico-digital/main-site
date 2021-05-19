(function ($) {
  'use strict';

  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(100);
  });

  AOS.init({
    easing: 'ease-out',
    duration: 500,
    once: true
  });

  //   magnific popup video  

  $(window).scroll(function () {

    var $this = $(this),
      st = $this.scrollTop(),
      navbar = $('.main-nav');

    if (st > 130) {
      if (!navbar.hasClass('nav-top')) {
        navbar.addClass('nav-top');
      }
    }
    if (st < 150) {
      if (navbar.hasClass('nav-top')) {
        navbar.removeClass('nav-top sleep');
      }
    }
    if (st > 250) {
      if (!navbar.hasClass('awake')) {
        navbar.addClass('awake');
      }
    }
    if (st < 250) {
      if (navbar.hasClass('awake')) {
        navbar.removeClass('awake');
        navbar.addClass('sleep');
      }
    }
  });


 


  $('.portfolio-gallery').each(function () {
    
  });

  // Shuffle js filter and masonry
  var containerEl = document.querySelector('.shuffle-wrapper');
  if (containerEl) {
    var Shuffle = window.Shuffle;
    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
      itemSelector: '.shuffle-item',
      buffer: 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
      var input = evt.currentTarget;
      if (input.checked) {
        myShuffle.filter(input.value);
      }
    });
  }

  // -----------------------------
  //  Count Up
  // -----------------------------
  function counter() {
    var oTop;
    if ($('.counter-stat').length !== 0) {
      oTop = $('.counter-stat').offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
      $('.counter-stat').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 1000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
      });
    }
  }
  $(window).on('scroll', function () {
    counter();
  });


})(jQuery);