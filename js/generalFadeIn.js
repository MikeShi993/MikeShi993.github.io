function divFade(div, height, time) {
    $(div).fadeTo(1, 0);
    var isVisible = false;
    $(window).scroll(function () {
        var shouldBeVisible = $(window).scrollTop() > height;
        if (shouldBeVisible && !isVisible) {
            isVisible = true;
            $(div).animate({
                opacity: 1,
                marginTop: "+=10px"
            }, {
                duration: time
            });
        } else if (isVisible && !shouldBeVisible) {
            isVisible = false;
            $(div).animate({
                opacity: 0,
                marginTop: '-=10px'
            }, {
                duration: time
            });
        };
    });
}
