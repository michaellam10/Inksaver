

    var shuffleme = (function ($) {

        var $grid = $('#grid'),
            $filterOptions = $('#voucher-sorting li'),


        init = function () {

            setTimeout(function () {
                listen();
                setupFilters();
            }, 100);

            $grid.shuffle({
                itemSelector: '[class*="col-"]'
            });
        },

        setupFilters = function () {
            var $btns = $filterOptions.children();
            $btns.on('click', function (e) {

                e.preventDefault();
                var $this = $(this),
                    isActive = $this.closest('li').hasClass('active'),
                    group = isActive ? 'all' : $this.data('group');
                if (!isActive) {
                    $('#voucher-sorting li').removeClass('active');
                }

                $this.closest('li').toggleClass('active');

                $grid.shuffle('shuffle', group);
            });
            $btns = null;
        },


        listen = function () {
            var debouncedLayout = $.throttle(300, function () {
                $grid.shuffle('update');
            });

            $grid.find('img').each(function () {
                var proxyImage;

                if (this.complete && this.naturalWidth !== undefined) {
                    return;
                }

                proxyImage = new Image();
                $(proxyImage).on('load', function () {
                    $(this).off('load');
                    debouncedLayout();
                });

                proxyImage.src = this.src;
            });

            setTimeout(function () {
                debouncedLayout();
            }, 500);
        };

        return {
            init: init
        };
    }(jQuery));

    shuffleme.init();

    var elemWidth, fitCount, varWidth = 0, ctr,
$menu = $("ul#voucher-sorting"), $collectedSet;

    ctr = $menu.children().length;
    $menu.children().each(function () {
        varWidth += $(this).outerWidth();
    });

    collect();
    $(window).resize(collect);

    function collect() {
        elemWidth = $menu.width();
        fitCount = Math.floor((elemWidth / varWidth) * ctr) - 1;

        console.log(elemWidth + ", " + varWidth + ", " + fitCount);

        $menu.children().css({ "display": "block", "width": "auto" });
        $collectedSet = $menu.children(":gt(" + fitCount + ")");
        $("#voucher-submenu").empty().append($collectedSet.clone());
        $collectedSet.css({ "display": "none", "width": "0" });
    }


