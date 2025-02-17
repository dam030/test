$(function(){
// 기본 세팅
    $('.navbar>ul>li').mouseenter(function(){
        $(this).find('.sub').stop().slideDown()
    });
});