$(document).ready(function () {

    


    // social share
    $(".article-share").jsSocials({
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

    


});

