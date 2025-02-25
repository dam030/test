$(function(){
    // 기본 세팅
    $('nav>ul>li').mouseenter(function(){
        // $('.sub').slideUp();
        $(this).find('.sub').slideDown();
    });
    $('nav>ul>li').mouseleave(function(){
        $(this).find('.sub').slideUp();
    });
    // 나브바

    function slideMove(){
        $('.slide').animate({'top':'400px'}, 500, function(){
            $('.slide>li:first-child').appendTo($('.slide'));
            $('.slide').css('top', '0px')
        });
    };
    setInterval(slideMove, 3000);
    // 슬라이드

    $('.modal').click(function(){
        $('.popup').show();
    });
    $('.close').click(function(){
        $('.popup').hide();
    });
    // 모달
});