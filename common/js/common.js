$(function(){
    //あるスクロール位置を基準にページトップボタンを見え隠れさせる。
    $(window).on('scroll',function(){
        if($(this).scrollTop() > 100){
            $('.pagetop').fadeIn();
        }else{
            $('.pagetop').fadeOut();
        }
    });

    //ページトップへ　スムーススクロール
    $('.pagetop > a').on('click',function(event){
        event.preventDefault();
        $('html,body').animate({'scrollTop':0},'slow');
    });

    //各要素へリンク　スムーススクロール
    $('.scroll-btn').on('click',function(event){
        event.preventDefault();
        var id = $(this).attr('href');
        var position = $(id).offset().top;

        $('html,body').animate({'scrollTop': position},'slow');
    });

    //グローバルメニュー　クリックした要素に下線を引く
    $('.gnavBorder').on('click',function(){
        $('.gnavBorder').removeClass('active');
        $(this).addClass('active');
    });
});