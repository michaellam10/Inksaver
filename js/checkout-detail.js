$(document).ready(function () {

    // radio list accordion
    $('.accordion-rl h3 a').on('click', function () {
        $(this).parent().find('input[type="radio"]').not(':checked').prop("checked", true);
    });

   
    stickyCart({
        bottomElement: '.checkout-footer'
    });

});

function stickyCart(settings) {

    _settings = $.extend({
        stickyElement: '.cart-summary-contain',
        bottomElement: '.section-newsletter'
    }, settings);

    if ($(_settings.stickyElement).length) {
        $(_settings.stickyElement).each(function () {

            var fromTop = $(this).offset().top,
                fromBottom = $(document).height() - ($(this).offset().top + $(this).outerHeight()),
                stopOn = $(document).height() - ($(_settings.bottomElement).offset().top - 40) + ($(this).outerHeight() - $(this).height());

            if ((fromBottom - stopOn) > 100) {
                $(this).css('width', $(this).width()).css('top', 0).css('position', '');
                $(this).affix({
                    offset: {
                        top: fromTop - 20,
                        bottom: stopOn
                    }
                }).on('affix.bs.affix', function () { $(this).css('top', '20px').css('position', ''); });
            }
            $(window).trigger('scroll');
        });
    }
}

$('[href="#CreateNewAddress"]').on('click', function (e) {
    var t = $(this).attr('href');
    var target = $(t);
    if (target.is(":visible")) return false;
});