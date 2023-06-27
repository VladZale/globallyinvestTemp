$(function() {
    $('.accordion__title').on('click', function() {
        if($('.block').hasClass('one')){
            $('.accordion__title').not($(this)).removeClass('active');
            $('.accordion__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});