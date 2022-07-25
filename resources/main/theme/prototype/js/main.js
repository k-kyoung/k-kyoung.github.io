$(document).ready(function () {

    //depth menu
    $('.menu').click(function () {

        var num = $(this).index();
        $('.sub').eq(num).addClass('on').parents().siblings().children().removeClass('on');

        $('.sub_bg').addClass('on');
    });

    //depth menu 외 클릭 시 효과 제거
    $('html').click(function (e) {
        if ($(e.target).parents('#wrap').length < 1) {
            //alert('메뉴 외 부분이 맞습니다')
            $('.sub_bg, .sub').removeClass('on');
        }
    });
});