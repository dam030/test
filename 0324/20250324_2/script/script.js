$(function(){
    // 기본세팅
    function slideMove(){
        let sliewWidth = $('.slide img').width();
        $('.slide').animate({'left':-sliewWidth}, 300, function(){
            $('.slide>li').eq(0).appendTo($('.slide'));
            $('.slide').css('left','0px');
        });
    };
    setInterval(slideMove, 3000);
    
    $('nav>ul>li').mouseenter(function(event){
        event.preventDefault();
        $(this).find('.sub').slideDown();
    })
    $('nav>ul>li').mouseleave(function(event){
        event.preventDefault();
        $(this).find('.sub').slideUp();
    })

    $('.modal').click(function(){
        $('.popup_bg').show();
    });
    $('.close').click(function(){
        $('.popup_bg').hide();
    });
});