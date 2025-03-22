$(function () {

  $(document).ready(function () {
    $(".top-info__btn").on("click", function (e) {
      e.preventDefault();

      let content = $(this).siblings(".top-info__content");

      $(".top-info__content").not(content).removeClass("active");
      $(".top-info__btn").not(this).removeClass("active");

      content.toggleClass("active");
      $(this).toggleClass("active");
    });


    $(document).on("click", function (e) {
      if (!$(e.target).closest(".top-info__item").length) {
        $(".top-info__content").removeClass("active");
        $(".top-info__btn").removeClass("active");
      }
    });
  });

  $(document).ready(function () {
    $(".menu-info__btn").on("click", function (e) {
      e.preventDefault();

      let content = $(this).siblings(".menu-info__content");

      $(".menu-info__content").not(content).removeClass("active");
      $(".menu-info__btn").not(this).removeClass("active");

      content.toggleClass("active");
      $(this).toggleClass("active");
    });


    $(document).on("click", function (e) {
      if (!$(e.target).closest(".menu-info__item").length) {
        $(".menu-info__content").removeClass("active");
        $(".menu-info__btn").removeClass("active");
      }
    });
  });

  
  const swiper = new Swiper('.slider__swipe', {
    slidesPerView: 3,
    Centered: true,
    spaceBetween: 37,
    navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
    },
    breakpoints: { // адаптация под разные размеры экрана
      1200: {
        slidesPerView: 2, // на экранах больше 1200px будет показываться 2 слайда
      },
    },
  });
  const swiperpopup = new Swiper('.product-popup__imgbox', {
    slidesPerView: 1,
    navigation: {
      nextEl: ".popup-button-next",
      prevEl: ".popup-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  const swiperproduct = new Swiper('.product-content', {
    slidesPerView: 4,
    Centered: true,
    breakpoints: { // адаптация под разные размеры экрана
    },
  });


  
  $(document).ready(function () {
    $(".block-size__label").click(function () {
      $(".block-size__label").removeClass("block-size__label--active");
      $(this).addClass("block-size__label--active");
    });
  });

  $('.menu__btn').on('click', function () {
    $('.overlay').toggleClass('overlay--active');
    $('.menu').toggleClass('menu--active');
  });

  $('.Etiam-btn').on('click', function () {
    $('.overlay').toggleClass('overlay--active');
    $('.product-popup').toggleClass('product-popup--active');
  });
  $('.rhoncus-btn').on('click', function () {
    $('.overlay').toggleClass('overlay--active');
    $('.form-popup').toggleClass('form-popup--active');
  });
  $('.popup__btn').on('click', function () {
    $('.overlay').removeClass('overlay--active');
    $('.product-popup').removeClass('product-popup--active');
  });
  $('.popup__btn').on('click', function () {
    $('.overlay').removeClass('overlay--active');
    $('.form-popup').removeClass('form-popup--active');
  });


});