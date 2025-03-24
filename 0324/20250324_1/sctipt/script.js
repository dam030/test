$(function(){
    // 기본세팅

    $('nav>ul>li').mouseenter(function(event){
        event.preventDefault();
        $(this).find('.sub').fadeIn();
    });
    $('nav>ul>li').mouseleave(function(event){
        event.preventDefault();
        $(this).find('.sub').fadeOut();
    });

    function slideMove(){
        $('.slides>ul>li').eq(0).fadeOut(function(){
            $('.slides>ul>li').eq(0).appendTo($('.slides>ul'));
        });
        $('.slides>ul>li').eq(1).fadeIn();
    };
    setInterval(slideMove,3000);

    $('.modal').click(function(){
        $('.popup_bg').show();
    });
    $('.close').click(function(){
        $('.popup_bg').hide();
    });
});