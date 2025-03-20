$(function(){
    // 기본세팅
    $('nav>ul').mouseenter(function(event){
        event.preventDefault();
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
        $('.slide').animate({'left':-slideWidth}, 300, function(){
            $('.slide>li').eq(0).appendTo($('.slide'));
            $('.slide').css('left','0px');
        });
    };
    setInterval(slideMove, 3000);

    $('.tabs>a').click(function(){
        $('.tabs').removeClass('active');
        $(this).parent().addClass('active');
    });
});