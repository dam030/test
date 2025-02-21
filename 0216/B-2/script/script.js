$(function(){
// 기본 세팅
    $('.navbar>ul').mouseenter(function(){
        $('.sub').slideDown();
        $('.sub_bg').slideDown();
    });
    $('.navbar>ul').mouseleave(function(){
        $('.sub').slideUp();
        $('.sub_bg').slideUp();
    });
    // navbar 세팅

    function slideMove(){
        $('.slides').animate({'left':'-1200px'}, 500, function(){
            $('.slides>a:first-child').appendTo($('.slides'));
            $('.slides').css('left','0px');
        });
    };
    setInterval(slideMove, 3000);
    // 슬라이드 세팅

    $('.modal').click(function(){
        $('.popup_bg').show();
    });
    $('.popup_bg>,popup>a').click(function(){
        $('.popup_bg').hide();
    });
    // 모달창 세팅
});