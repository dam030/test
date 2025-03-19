$(function(){
    // 기본세팅
    $('nav>ul').mouseenter(function(){
        $('.sub').slideDown();
        $('.sub_bg').slideDown();
    });
    $('nav>ul').mouseleave(function(){
        $('.sub').slideUp();
        $('.sub_bg').slideUp();
    });

    $('.modal').click(function(){
        $('.popup').show();
    });
    $('.close').click(function(){
        $('.popup').hide();
    });

    function slideMove(){
        let slideWidth = $('.slide img').width();
        $('.slides>ul').animate({'left':-slideWidth}, 300, function(){
            $('.slides>ul>li').eq(0).appendTo($('.slides>ul'));
            $('.slides>ul').css('left','0px');
        });
        setInterval(slideMove, 3000);
    };

    $('.tabs').click(function(){
        $('.tabs').removeClass();
        $('.tabs').addClass('active');
    });
});