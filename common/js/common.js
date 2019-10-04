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
        let id = $(this).attr('href');
        let position = $(id).offset().top;

        $('html,body').animate({'scrollTop': position},'slow');
    });

    //グローバルメニュー　クリックした要素に下線を引く
    $('.gnavBorder').on('click',function(){
        $('.gnavBorder').removeClass('active');
        $(this).addClass('active');
    });

    //アコーディオン
    $('.qa__list__item > dl > dt').on('click',function(){
        let $dd = $(this).next();
        if($(this).hasClass('open')){
            $(this).removeClass('open');
            $dd.slideUp();
        }else{
            $(this).addClass('open');
            $dd.slideDown();
        }
    });

    //モーダル
    $('.contact__form__check_link').on('click', () => {
        $('.modal-wrapper').fadeIn();
    });
    $('.js-close').on('click', () => {
        $('.modal-wrapper').fadeOut();
    });
});