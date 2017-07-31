$(document).ready(function () {

    $('.photographerTemplate').hover(
        function () {
            $(this).addClass('popOut')
        },
        function () {
            $(this).removeClass('popOut')
        }
    )
});
