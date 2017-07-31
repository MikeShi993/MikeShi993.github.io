$(document).ready(function () {

    //-----------------fade slide in for quote---------//
    $('#quote').fadeTo(1, 0);
    $('#learnContainer').fadeTo(1, 0);
    
    var quoteIsVisible = false;
    
    $(window).scroll(function () {
        
        var shouldBeVisible = $(window).scrollTop() > 160;
        
        if (shouldBeVisible && !quoteIsVisible) {
            quoteIsVisible = true;
            $('#quote').animate({
                opacity: 1,
                marginTop: "+=10px"
            }, {
                duration: 1000,
            })
            $('#learnContainer').animate({
                opacity: 1,
                marginTop: "+=10px"
            }, {
                duration: 1000,
            })
            

        } else if (quoteIsVisible && !shouldBeVisible) {
            quoteIsVisible = false;
            $('#quote').animate({
                opacity: 0,
                marginTop: '-=10px'
            }, {
                duration: 1000
            });
            quoteIsVisible = false;
            $('#learnContainer').animate({
                opacity: 0,
                marginTop: '-=10px'
            }, {
                duration: 1000
            });
        };
    });
            
});