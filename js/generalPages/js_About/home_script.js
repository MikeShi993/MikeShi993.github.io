$(document).ready(function () {

   
    //-----------------fade slide in for info---------//
    $('.info').fadeTo(1, 0);
    var infoIsVisible = false;
    $(window).scroll(function () {
        var shouldBeVisible = $(window).scrollTop() > 160;
        if (shouldBeVisible && !infoIsVisible) {
            infoIsVisible = true;
            $('.info').animate({
                opacity: 1,
                marginTop: "+=10px"
            }, {
                duration: 1000,
                queue: true
            });

        } else if (infoIsVisible && !shouldBeVisible) {
            infoIsVisible = false;
            $('.info').animate({
                opacity: 0,
                marginTop: '-=10px'
            }, {
                duration: 1000
            });
        };
    });
            
});