
jQuery(function ($) { 


  $(window).scroll(function () {
    var mv = $('.p-mv').innerHeight(); 
    if ($(this).scrollTop() > mv / 4) {
      $('.js-entry').fadeIn();
    } else {
      $('.js-entry').fadeOut();
    }
  });

  // ヘッダー
  $(window).on('scroll', function () {
    if ($('.slider1').height() < $(this).scrollTop()) {
      $('.header').css('background', 'rgba(17,17,17,1)');
    } else {
      $('.header').css('background', 'rgba(17,17,17,0.5)');
    }
  });

  //ドロワーメニュー
  $('.navbar_toggle').on('click', function () {
    $(this).toggleClass('open');
    $('.menu').toggleClass('open');
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

  $('.js-hamburger').click(function(){
    $(this).toggleClass('is-active');
    $('.js-drawer').toggleClass('is-active');
    $('html').toggleClass('is-fixed');
  });

  $('.js-drivers-slider').slick({
    slidesToShow: 3, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          infinite:false,
          arrows:false,
          dots:true,
          dotsClass: 'slide-dots',
          slidesToShow: 1, 
        }
      }
    ]
  });


  // エントリーボタン
  $('.js-entryBtn a').on({
    "mouseenter": function(){$(this).children('img').attr('src', '../images/common/entry_icon2.png');},
    "mouseleave": function(){$(this).children('img').attr('src', '../images/common/entry_icon.png');}
  });

  $('.js-entryBtn').on({
    "mouseenter": function(){$(this).children('img').attr('src', '../images/common/entry_icon2.png');},
    "mouseleave": function(){$(this).children('img').attr('src', '../images/common/entry_icon.png');}
  });

  $('.js-entryBtnFront').on({
    "mouseenter": function(){$(this).children('img').attr('src', './images/common/entry_icon2.png');},
    "mouseleave": function(){$(this).children('img').attr('src', './images/common/entry_icon.png');}
  });

    // お問い合わせ
    $('#form_submit_button').prop('disabled', true);
    $('#form_submit_button').css('opacity', '0.7');
    $('#form_submit_button').css('cursor', 'not-allowed');
    $('#check').on('click', function () {
      if ($(this).prop('checked') == false) {
        $('#form_submit_button').prop('disabled', true);
        $('#form_submit_button').css('opacity', '0.7');
        $('#form_submit_button').css('cursor', 'not-allowed');
      } else {
        $('#form_submit_button').prop('disabled', false);
        $('#form_submit_button').css('opacity', '1');
        $('#form_submit_button').css('cursor', 'pointer');
      }
    });
  

  // フェードイン
  const controller = new ScrollMagic.Controller()

  $(".js-scroll-fade").each(function (i, node) {
  var scene = new ScrollMagic.Scene({
      triggerElement: node,
      triggerHook: 0.8,
      reverse: false,
  })
  .setClassToggle(this, "is-scroll-fade")
  .addTo(controller) 
  });
  
});


// タイトル
var textWrapper = document.querySelectorAll('.c-title__en');
textWrapper.forEach((t) => (
    t.innerHTML = t.textContent.replace(/\S/g, "<span class=''>$&</span>"
    )
));


var trimNum = 0;
window.onload = function() {
  jQuery(function($) {
    $('.c-title').on('inview',function(){
      trimNum = 0;
      $(this).find('.c-title__en').each(function(){
        var elm = $(this).find('span');
        $(this).find('span').each(function(){
          var elm = $(this);
          setTimeout(function(){
            elm.addClass('is-show');
          },trimNum * 50);
          trimNum++;
        })
      });
    });
  });
};
