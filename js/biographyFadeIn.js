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
});