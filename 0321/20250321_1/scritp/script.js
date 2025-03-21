$(function(){
    // 기본세팅
    function slideMove(){
        let slideHeight = $('.slide img').height();

        $('.slide').animate({'top':-slideHeight}, 300, function(){
            $('.slide>li').eq(0).appendTo($('.slide'));
            $('.slide').css('top','0px')
        });
    };
    setInterval(slideMove,3000)


    $('.navbar>ul>li').mouseenter(function(event){
        event.preventDefault()
        $(this).find('.sub').slideDown();
    });
    $('.navbar>ul>li').mouseleave(function(event){
        event.preventDefault()
        $(this).find('.sub').slideUp();
    });


    $('.modal').click(function(){
        $('.popup').show();
    });
    $('.close').click(function(){
        $('.popup').hide();
    });


    $('.tab>a').click(function(){
        $('.tab').removeClass('active');
        $(this).parent().addClass('active');
    });
});