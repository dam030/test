$(function(){
    $('.tab_box>ul>li>a').click(function(event){
        event.preventDefault();
        // 기본 동장 방지
        $('.tab_box>ul>li').removeClass('active');
        $(this).parent().addClass('active');
    });
    // 탭 박스

    $('.modal').click(function(event){
        event.preventDefault();
        $('.popup').show();
    });
    $('.close').click(function(event){
        event.preventDefault();
        $('.popup').hide();
    });
    // 팝업

    function slideimg(){
        $('.slide_container>a').eq(0).fadeOut(300, function(){
            $('.slide_container>a').eq(0).appendTo($('.slide_container'))
        });
        $('.slide_container>a').eq(1).fadeIn(300);
    };
    setInterval(slideimg,3000);
    // 슬라이드

    // f-1
    // $('nav>ul>li').mouseenter(function(){
    //     $(this).find('.sub').stop().slideDown();
    // });
    // $('nav>ul>li').mouseleave(function(){
    //     $(this).find('.sub').stop().slideUp();
    // });

    // a타입
    // $('nav>ul').mouseenter(function(){
    //     $(this).find('.sub').stop().slideDown();
    // });
    // $('nav>ul').mouseleave(function(){
    //     $(this).find('.sub').stop().slideUp();
    // });

    // f-4
    $('nav>ul').mouseenter(function(){
        $('.sub').stop().slideDown();
        $('.sub_bg').stop().slideDown();
    });
    $('nav>ul').mouseleave(function(){
        $('.sub').stop().slideUp();
        $('.sub_bg').slideUp();
    });

});