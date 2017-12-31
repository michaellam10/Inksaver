$(document).ready(function () {

    // banner slider
    $('.banner-slider-inner').slick({
        dots: true,
        speed: 400,
        infinite: true,
        arrows: true,
        prevArrow: $('.banner-slider .slick-prev'),
        nextArrow: $('.banner-slider .slick-next'),
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // featured/related slider
    $('.column-slider-inner').slick({
        dots: true,
        infinite: false,
        speed: 300,
        arrows: true,
        prevArrow: $('.column-slider .slick-prev'),
        nextArrow: $('.column-slider .slick-next'),
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
              }
          },
          {
              breakpoint: 800,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          }
        ]
    });

    setTimeout(function () {
        $('.product-box-contain').matchHeight();
    }, 500);

});