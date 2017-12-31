$(document).ready(function () {

    //product detail slider
    $('.thumbnail-slider-screen-inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.thumbnail-slider-screen .slick-prev'),
        nextArrow: $('.thumbnail-slider-screen .slick-next'),
        fade: true,
        asNavFor: '.thumbnail-slider-nav-inner',
        responsive: [
          {
              breakpoint: 767,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: true
              }
          }
        ]
    });

    $('.thumbnail-slider-nav-inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.thumbnail-slider-screen-inner',
        dots: false,
        arrows: true,
        prevArrow: $('.thumbnail-slider-nav .slick-prev'),
        nextArrow: $('.thumbnail-slider-nav .slick-next'),
        centerMode: false,
        focusOnSelect: true,
        responsive: [
          {
              breakpoint: 991,
              settings: {
                  slidesToShow: 3
              }
          }
        ]
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


    // product detail summary, read more / read less
    var bindReadMore = function () {
        $('.read-more').on('click', function (e) {
            e.preventDefault();
            var parent = $(this).parent();
            parent.trigger("destroy");
            parent.removeClass('detail-summary-is-truncated');
            parent.addClass('detail-summary-is-not-truncated');
            bindReadLess(); // bind click on "less"
        });
    };

    var bindReadLess = function () {
        $('.read-less').on('click', function (e) {
            e.preventDefault();
            var parent = $(this).parent();
            truncateIfNeeded(parent); // re-initialize ellipsis
        });
    };

    var truncateIfNeeded = function (jqueryTag) {
        var $selectionToTruncate = jqueryTag || $('.product-detail-summary');

        $selectionToTruncate.dotdotdot({
            ellipsis: '...',
            watch: true,
            wrap: 'word',
            fallbackToLetter: true,
            height: 100, // max number of lines
            after: '.read-more',
            callback: function (isTruncated, orgContent) {
                var $currentReadMore = $(this).find('.read-more');
                var $currentReadLess = $(this).find('.read-less');

                if (isTruncated) {
                    $(this).addClass('detail-summary-is-truncated');
                }
                bindReadMore(); // bind click on "read more"
            },
        });
    };

    $(function () {
        truncateIfNeeded(); // Initialize ellipsis
    });


    // social share
    $(".product-share").jsSocials({
        shares: [
            "email",
            { share: "facebook", label: "Share" },
            "twitter",
            "pinterest",
            "googleplus"
        ],
        shareIn: "popup",
        showLabel: function (screenWidth) {
            return (screenWidth > 640);
        }
    });




    $('#links').on('click', function (e) {
        e.preventDefault();
        var target = e.target;
        var link = $(target).closest('a');
        var options = { index: link.data('index') };
        blueimp.Gallery($('#links').find('a'), options);
    });

    // rating | reviews
    $('.mini-rating').raty({
        half: true,
        starOff : 'fa fa-star rating-off',
        starOn: 'fa fa-star rating-on',
        starHalf: 'fa fa-star-half rating-half',
        readOnly: true,
        score: 3.5
    });

    $('.review-meta-rating').raty({
        half: true,
        starOff: 'fa fa-star rating-off',
        starOn: 'fa fa-star rating-on',
        starHalf: 'fa fa-star-half rating-half',
        readOnly: true,
        score: 3.5
    });

    $('.review-form-rating').raty({
        half: true,
        starOff: 'fa fa-star rating-off',
        starOn: 'fa fa-star rating-on',
        starHalf: 'fa fa-star-half rating-half'
    });

    $('.lnk-reviews-show').on('click', function () {
        $('html, body').animate({ scrollTop: $('#product-details-target').offset().top - 25 }, 800);

        if ($('.nav-tabs li').hasClass('active')) {
            $('.nav-tabs li').removeClass('active');
            $('.lnk-review-tab').addClass('active');
        }
    });

    $('.lnk-review-request').on('click', function () {


        if ($('.nav-tabs li').hasClass('active')) {
            $('.nav-tabs li').removeClass('active');
            $('.lnk-review-tab').addClass('active');
        }
        setTimeout(function(){
            $('html, body').animate({ scrollTop: $('#review-form').offset().top - 25 }, 800);
        }, 50);
    });


});
