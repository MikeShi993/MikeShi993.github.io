// script.js jquery stuff

$(document).ready(function () {
    /*-------------------fadeIn for navDots -----------*/
    
    divFade(".navDots", 850, 500);

    /*---------------click to scroll for navDots --------*/

    $("#dot1").click(function () {
        $('html,body').animate({
            scrollTop: $("#pic1").offset().top - 100
        }, 'slow');
    });

    $("#dot2").click(function () {
        $('html,body').animate({
            scrollTop: $("#pic2").offset().top
        }, 'slow');
    });

    $("#dot3").click(function () {
        $('html,body').animate({
            scrollTop: $("#pic3").offset().top - 100
        }, 'slow');
    });

    $("#dot4").click(function () {
        $('html,body').animate({
            scrollTop: $("#pic4").offset().top - 100
        }, 'slow');
    });

    $("#dot5").click(function () {
        $('html,body').animate({
            scrollTop: $("#pic5").offset().top
        }, 'slow');
    });

    $("#dot6").click(function () {
        $('html,body').animate({
            scrollTop: $("#pic6").offset().top - 100
        }, 'slow');
    });

    /*------------light up navDots---------*/

    $(window).scroll(function () {

        if ($(window).scrollTop() >= 825 && $(window).scrollTop() < 1425) {
            $('#dot1').addClass("navDotCheck");
        } else {
            $('#dot1').removeClass("navDotCheck");
        }

        if ($(window).scrollTop() >= 1425 && $(window).scrollTop() < 2350) {
            $('#dot2').addClass("navDotCheck");
        } else {
            $('#dot2').removeClass("navDotCheck");
        }

        if ($(window).scrollTop() >= 2350 && $(window).scrollTop() < 2875) {
            $('#dot3').addClass("navDotCheck");
        } else {
            $('#dot3').removeClass("navDotCheck");
        }

        if ($(window).scrollTop() >= 2875 && $(window).scrollTop() < 3675) {
            $('#dot4').addClass("navDotCheck");
        } else {
            $('#dot4').removeClass("navDotCheck");
        }

        if ($(window).scrollTop() >= 3675 && $(window).scrollTop() < 4400) {
            $('#dot5').addClass("navDotCheck");
        } else {
            $('#dot5').removeClass("navDotCheck");
        }

        if ($(window).scrollTop() >= 4400) {
            $('#dot6').addClass("navDotCheck");
        } else {
            $('#dot6').removeClass("navDotCheck");
        }
    });
});
