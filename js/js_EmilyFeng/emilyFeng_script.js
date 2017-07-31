// script.js jquery stuff

$(document).ready(function () {

    //-----------------fade slide in for biography---------//
    $('.col').fadeTo(1, 0);
    var bioIsVisible = false;
    $(window).scroll(function () {
        var shouldBeVisible = $(window).scrollTop() > 160;
        if (shouldBeVisible && !bioIsVisible) {
            bioIsVisible = true;
            $('.col1').animate({
                opacity: 1,
                marginTop: "+=10px"
            }, {
                duration: 1000,
                queue: true
            });
            $('.col2').delay(300).animate({
                opacity: 1,
                marginTop: "+=10px"
            }, {
                duration: 1000
            });
            $('.col3').delay(600).animate({
                opacity: 1,
                marginTop: "+=10px"
            }, {
                duration: 1000
            });

        } else if (bioIsVisible && !shouldBeVisible) {
            bioIsVisible = false;
            $('.col').animate({
                opacity: 0,
                marginTop: '-=10px'
            }, {
                duration: 1000
            });
        };
    });

    //---------fade in for food descriptions ---//

    $(".imgContainer").hover(function () {
        $(this).children(".imgDescription").fadeTo(400, 1);
    }, function () {
        $(this).children(".imgDescription").fadeTo(300, 0);
    });

    //---------scroll back to top button ---------//
    $(".backToTop").hover(function () {
        $(this).css('cursor', 'pointer');
    }, function () {
        $(this).css('cursor', 'default');
    });
    $(".backToTop").click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 'slow');
    });
});
