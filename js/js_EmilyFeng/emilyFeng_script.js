// script.js jquery stuff

$(document).ready(function () {

    //---------hover for food descriptions ---//

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
    
    $('.backToTop').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});
