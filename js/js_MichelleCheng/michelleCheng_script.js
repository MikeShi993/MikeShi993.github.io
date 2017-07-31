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
    
    /*-------------------fadeIn for navDots -----------*/
    
    $('.navDots').fadeTo(1, 0);
    var dotsAreVisible = false;
    $(window).scroll(function () {
        var shouldBeVisible = $(window).scrollTop() > 850;
        if (shouldBeVisible && !dotsAreVisible) {
            dotsAreVisible = true;
            $('.navDots').animate({
                opacity: 1,
                marginTop: "+=10px"
            }, {
                duration: 500
            });

        } else if (dotsAreVisible && !shouldBeVisible) {
            dotsAreVisible = false;
            $('.navDots').animate({
                opacity: 0,
                marginTop: '-=10px'
            }, {
                duration: 500
            });
        };
    });

    /*---------------click to scroll for navDots --------*/
    
    $("#dot1").click(function () {
        $('html,body').animate({
            scrollTop: 1025
        }, 'slow');
    });
    
    $("#dot2").click(function () {
        $('html,body').animate({
            scrollTop: 1850
        }, 'slow');
    });
    
    $("#dot3").click(function () {
        $('html,body').animate({
            scrollTop: 2675
        }, 'slow');
    });
    
    $("#dot4").click(function () {
        $('html,body').animate({
            scrollTop: 3400
        }, 'slow');
    });
    
    $("#dot5").click(function () {
        $('html,body').animate({
            scrollTop: 4220
        }, 'slow');
    });
    
    $("#dot6").click(function () {
        $('html,body').animate({
            scrollTop: $(document).height() 
        }, 'slow');
    });
    
    /*------------light up navDots---------*/
    $(window).scroll(function () {
        
        if($(window).scrollTop() >= 825 && $(window).scrollTop()<1425){
            $('#dot1').addClass("navDotCheck");
        } else {
            $('#dot1').removeClass("navDotCheck");
        }
        
        if($(window).scrollTop() >= 1425 && $(window).scrollTop()<2350){
            $('#dot2').addClass("navDotCheck");
        } else {
            $('#dot2').removeClass("navDotCheck");
        }
        
        if($(window).scrollTop() >= 2350 && $(window).scrollTop()<2875){
            $('#dot3').addClass("navDotCheck");
        } else {
            $('#dot3').removeClass("navDotCheck");
        }
        
        if($(window).scrollTop() >=2875 && $(window).scrollTop()<3675){
            $('#dot4').addClass("navDotCheck");
        } else {
            $('#dot4').removeClass("navDotCheck");
        }
        
        if($(window).scrollTop() >= 3675 && $(window).scrollTop()<4400){
            $('#dot5').addClass("navDotCheck");
        } else {
            $('#dot5').removeClass("navDotCheck");
        }
        
        if($(window).scrollTop() >= 4400){
            $('#dot6').addClass("navDotCheck");
        } else {
            $('#dot6').removeClass("navDotCheck");
        }
    });
});

