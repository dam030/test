$(function(){
    // 기본세팅
    $('.navbar>ul>li').mouseenter(function(){
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
        let slideH = $('.slide img').height();
        $('.slide').animate({'top':-slideH}, 300, function(){
            $('.slide>li').eq(0).appendTo($('.slide'));
            $('.slide').css('top','0px')
        });
    };
    setInterval(slideMove,3000)
});