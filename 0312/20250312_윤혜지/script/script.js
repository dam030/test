$(function(){
    // 기본 세팅
    $('.navbar>ul>li').mouseover(function(){
        $(this).find('.sub').slideDown();
    });
    $('.navbar>ul>li').mouseleave(function(){
        $(this).find('.sub').slideUp();
    });

    $('.modal').click(function(){
        $('.popup_bg').show();
    });
    $('.close').click(function(){
        $('.popup_bg').hide();
    });

    function slideMove(){
        let slideWidth = $('.slide img').width();
        $('.slide>ul').animate({'left':-slideWidth}, 300, function(){
            $('.slide>ul>li').eq(0).appendTo($('.slide>ul'));
            $('.slide>ul').css('left', '0px');
        });
    }
    setInterval(slideMove, 3000);
});