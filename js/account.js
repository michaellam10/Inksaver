$(document).ready(function () {

    // slick nav
    $('.slick-nav-inner').slick({
        infinite: false,
        speed: 300,
        arrows: true,
        prevArrow: $('.slick-nav .slick-nav-prev'),
        nextArrow: $('.slick-nav .slick-nav-next'),
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5
                }
            },
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 4
              }
          },
          {
              breakpoint: 800,
              settings: {
                  slidesToShow: 3
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2
              }
          },
          {
              breakpoint: 300,
              settings: {
                  slidesToShow: 1
              }
          }
        ]
    });
});

