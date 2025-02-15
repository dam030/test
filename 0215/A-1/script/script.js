$(function(){
// $(document).ready.function(){
// 기본으로 꼭 넣어두기
    $('.navbar').mouseenter(function(){
        $('.sub').stop().slideDown(350);
    });
    $('.navbar').mouseleave(function(){
        $('.sub').stop().slideUp(350);
    });

    function slideMove(){
        $('.slides_container').animate({'bottom':'-300px'}, 500, function(){
            // $('.slides_container').children('div').eq(0)
            $('.slides_container:first-child').appendTo($('.slides_container'));
            $('.slides_container').css('bottom','0px');
        });
    }
    setInterval(slideMove, 3000);
});