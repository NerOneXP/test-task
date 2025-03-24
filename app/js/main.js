$(function () {

  $(document).ready(function () {
    $(".top-info__btn").on("click", function (e) {
      e.preventDefault();

      let content = $(this).siblings(".top-info__content");

      $(".top-info__content").not(content).removeClass("active");
      $(".top-info__btn").not(this).removeClass("active");

      content.toggleClass("active");
      $('.header').css('z-index', '2');
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
    slidesPerView: 1,

    spaceBetween: 37,
    navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
    },
    breakpoints:{
      640:{
        slidesPerView: 2,
      },
      1050:{
        slidesPerView: 3,
      },
    }
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
    slidesPerView: 1,
    spaceBetween: 41,
    breakpoints:{
      777:{
        slidesPerView: 2,
      },
      1150:{
        slidesPerView: 3,
      },
      1550:{
        slidesPerView: 4,
      },
    }
  });



  $(document).ready(function () {
    $(".block-size__label").click(function () {
      $(".block-size__label").removeClass("block-size__label--active");
      $(this).addClass("block-size__label--active");
    });
  });

  $('.menu__btn').on('click', function () {
    $('.header, .top-info').css('z-index', '9');
    $('.overlay').toggleClass('overlay--active');
    $('.menu').toggleClass('menu--active');
    $('body').toggleClass('no-scroll');
    $('.menu__btn').toggleClass('menu__btn--active');
  });
  
  $('.Etiam-btn, .rhoncus-btn').on('click', function () {
    $('.header, .top-info').css('z-index', '7');
    $('body').addClass('no-scroll');
    $('.overlay').toggleClass('overlay--active');

    let targetPopup = $(this).hasClass('Etiam-btn') ? '.form-popup' : '.product-popup';
    $(targetPopup).toggleClass(targetPopup.substring(1) + '--active');
  });

  $('.popup__btn').on('click', function () {
    $('body').removeClass('no-scroll');
    $('.overlay, .product-popup, .form-popup').removeClass('overlay--active product-popup--active form-popup--active');
  });

  $(document).on("click", ".block-size__quantity-btn", function (e) {
    e.preventDefault();

    let $value = $(this).siblings("[data-value]"),
        val = parseInt($value.text()) || 1,
        newVal = $(this).data("action") === "minus" ? Math.max(1, val - 1) : val + 1;

    $value.text(newVal);
});

});