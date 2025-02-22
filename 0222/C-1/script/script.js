$(function(){
    $('.tab>a').click(function(event){
        event.preventDefault();
        $('.tab').removeClass('active');
        $(this).parent().addClass('active');
    });

    $('.gnb>ul>li').mouseover(function(){
        $(this).find('.sub').stop().slideDown();
    });
    $('.gnb>ul>li').mouseout(function(){
        $(this).find('.sub').stop().slideUp();
    });

    function slideMove(){
        // $('.slides').find('li').eq(0).fadeOut(400, function(){
        //     $('.slides').find('li').eq(0).appendTo($('.slides'))
        // });
        // $('.slides').find('li').eq(1).fadeIn(400);
        $('.slides>ul>li:nth-child(1)').fadeOut(400, function(){
            $('.slides>ul>li:nth-child(1)').appendTo('.slides>ul')
        });
        $('.slides>ul>li:nth-child(2)').fadeIn(400);

    };
    setInterval (slideMove, 3000)
});