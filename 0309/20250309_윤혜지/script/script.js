$(function(){
    $('.modal').click(function(){
        $('.popup').show();
    });
    $('.popup_box>button').click(function(){
        $('.popup').hide();
    });

    $('.navbar>ul>li').mouseenter(function(){
        $(this).find('.sub').fadeIn(250);
    });
    $('.navbar>ul>li').mouseleave(function(){
        $(this).find('.sub').fadeOut(250);
    });
    $('.navbar>ul').mouseenter(function(){
        $('.sub_bg').fadeIn(250);
    });
    $('.navbar>ul').mouseleave(function(){
        $('.sub_bg').fadeOut(250);
    });

    function slideMove(){
        let slideWidth = $('.slide>ul>li>a>img').width();
        $('.slide>ul').animate({'left':-slideWidth}, 300, function(){
            $('.slide>ul>li').eq(0).appendTo($('.slide>ul'));
            $('.slide>ul').css('left','0px');
        });
    };
    setInterval(slideMove,3000)
});