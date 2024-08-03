//ハンバーガーメニュー
var hamburger = $('.header__nav--hamburger');

//open/closeボタンクリック
$('.header__btn--hamburger').on('click', function () {
  //console.log('click');
  //.hamburger表示繰り返し
  hamburger.toggleClass('header__nav--hamburger-active');
});

$('.header__nav--hamburger').on('click', function () {
  hamburger.removeClass('header__nav--hamburger-active');
});

$(window).on('resize', function () {
  //console.log('resize');
  //ハンバーガーメニュー閉じる
  hamburger.removeClass('header__nav--hamburger-active');
});

//アコーディオン
$('.faq__contents--q').on('click', function (e) {
    var content = $(this).next();
    content.slideToggle(300);
    $('.q__headding--btnP', this).toggleClass("open", 300);
  });