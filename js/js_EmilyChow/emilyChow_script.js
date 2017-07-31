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

    //-------general photo-slide function -------//
    function titleFade(title, height) {
        $(title).fadeTo(1, 0);
        var titleIsVisible = false;
        $(window).scroll(function () {
            var shouldBeVisible = $(window).scrollTop() > height;
            if (shouldBeVisible && !titleIsVisible) {
                titleIsVisible = true;
                $(title).animate({
                    opacity: 1,
                }, {
                    duration: 750
                });
            } else if (titleIsVisible && !shouldBeVisible) {
                titleIsVisible = false;
                $(title).animate({
                    opacity: 0,
                }, {
                    duration: 750
                });
            };
        });
    }


    titleFade(".title1", 20);
    titleFade(".title2", 850);
    titleFade(".title3", 1550);

});
