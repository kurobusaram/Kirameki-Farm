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