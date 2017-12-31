$(document).ready(function () {

    // login dropdown
    $('.login-dropdown').on('click', function (e) {
        e.stopPropagation();
    });

    // mini cart scrollbar
    $('.mini-cart-content').mCustomScrollbar({
        mouseWheelPixels: 10,
        scrollInertia: 0
    });

    // disable window scroll when cart is scrolled
    $('.mini-cart-content').bind('mousewheel DOMMouseScroll', function (e) {
        var e0 = e.originalEvent,
            delta = e0.wheelDelta || -e0.detail;
        this.scrollTop += (delta < 0 ? 1 : -1) * 30;
        e.preventDefault();
    });

    // remove mini cart dropdown toggle for mobile
    function cartToggle() {
        containerWidth = $(window).width();
        if (containerWidth <= 767) {
            $('.mini-cart > li > a').removeAttr('data-toggle', '');
        }
        if (containerWidth >= 768) {
            $('.mini-cart > li > a').attr('data-toggle', 'dropdown');
        }
    }
    cartToggle();

    $(window).on('resize', function () {
        cartToggle();
    });

    // title clips
    $('.mini-cart-title').dotdotdot({
        ellipsis: '...',
        wrap: 'word',
        height: 22,
        watch: true
    });

   
    $('.compare-summary').dotdotdot({
        ellipsis: '...',
        wrap: 'word',
        height: 210,
        watch: true
    });

    $('.coupon-detail p').dotdotdot({
        ellipsis: '...',
        wrap: 'word',
        height: 44,
        watch: true
    });

    // tooltips
    $('[data-toggle="tooltip"]').tooltip();


    // select with no search
    $('.js-select').select2({
        minimumResultsForSearch: Infinity
    });

    // select with search
    $('.js-select-with-search').select2({
    });

    // country select
    function formatState(state) {
        if (!state.id) { return state.text; }
        var $state = $(
          "<span><i class=\"flag-sm flag-sm-" + state.element.value.toUpperCase() + "\"></i>" + state.text + "</span>"
        );
        return $state;
    };

    $('.js-select-countries').select2({
        templateResult: formatState
    });

    // copyright year
    $('.copyright-year').append((new Date()).getFullYear());
  
});