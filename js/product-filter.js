$(document).ready(function () {

    // price range slider
    $('.noUi-handle').on('click', function () {
        $(this).width(50);
    });
    var rangeSlider = document.getElementById('slider-range');
    var moneyFormat = wNumb({
        decimals: 0,
        thousand: ',',
        prefix: 'R'
    });
    noUiSlider.create(rangeSlider, {
        start: [50, 6000],
        step: 1,
        range: {
            'min': [50],
            'max': [10000]
        },
        format: moneyFormat,
        connect: true
    });

    // filter scrollbar
    $('.filter-scroll').mCustomScrollbar({
        mouseWheelPixels: 10,
        scrollInertia: 0
    });

    // disable window scroll when filter is scrolled
    $('.filter-scroll').bind('mousewheel DOMMouseScroll', function (e) {
        var e0 = e.originalEvent,
            delta = e0.wheelDelta || -e0.detail;
        this.scrollTop += (delta < 0 ? 1 : -1) * 30;
        e.preventDefault();
    });

    $('.btn-filter').click(function () {
        $('.product-filter').slideToggle(500);
        $(this).toggleClass('show');
    });

    function showFilter() {

        var containerWidth = $('.main-content .container').width();

        if (containerWidth >= 940) {
            $('.product-filter').show();
        }
        else {
            $('.product-filter').hide();
        }
    }
    $(window).on('resize', function () {
        showFilter();
    });

   
});

