$(function(){
    $('nav>ul>li').mouseenter(function(){
        $('.sub').stop().slideUp();
        $(this).find('.sub').stop().slideDown();
    });
    $('nav>ul').mouseleave(function(){
        $(this).find('.sub').stop().slideUp();
    });
    // 나브바

    $('.modal>a').click(function(){
        $('.popup_bg').show();
    })
    $('button').click(function(){
        $('.popup_bg').hide();
    });
    // 모달창


    function slideMove(){
        let slideWidth = $('.slides>ul>li>a>img').width();
        $('.slides>ul').animate({left:(-slideWidth+'px')}, 500, function(){
            $('.slides>ul>li:first-child').appendTo($('.slides>ul'));
            $('.slides>ul').css('left','0px');
        });
    };
    setInterval(slideMove,3000);
});