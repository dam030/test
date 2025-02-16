$(function(){
// $(document).ready.function(){
// 기본으로 꼭 넣어두기
    // $('.navbar').mouseenter(function(){
    //     $('.sub').stop().slideDown(350);
    // });
    // $('.navbar').mouseleave(function(){
    //     $('.sub').stop().slideUp(350);
    // });
    // 이거는 서브메뉴가 한거번에 내려오는 것

    $('.navbar>ul>li').mouseenter(function(){
        $(this).find('.sub').stop().slideDown()
        // $('.sub').stop().slideDown(350);
    });
    $('.navbar>ul>li').mouseleave(function(){
        $(this).find('.sub').stop().slideUp()
    });
    // 이거는 타이틀 별로 서브메뉴가 내려오는 것

    function slideMove(){
        $('.slides_container').animate({'bottom':'-300px'}, 500, function(){
            // $('.slides_container').children('div').eq(0)
            $('.slides_container>div:first-child').appendTo($('.slides_container'));
            $('.slides_container').css('bottom','0px');
        });
    }
    setInterval(slideMove, 3000);

    $('.tabs>li>a').click(function(){
        $('.tabs>li').removeClass('active');
        $(this).parent().addClass('active');
    });

    $('.notice>ul>li:first-child>a').click(function(){
        $('#popup').show();
    });
    $('.btn').click(function(){
        $('#popup').hide();
    })
});