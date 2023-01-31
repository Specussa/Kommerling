$(document).ready(function(){
   var clickd;
   var slider = $('.slider');
   var slider__pro = $('.slider__item');
   var sliderModal = $('.slider__modal')
   var slickSliderfor = $('.slider-for');
   var slickSlidernav = $('.slider-nav');
   var slickSlidermodal = $('.slider__overflow');
   var body = document.querySelector("body");
   var exitBtn = $('.slider__exit');
   slider.slick({
      infinite: false,
      slidesToShow: 3,
      responsive: [{
      breakpoint: 1490,
      settings: {
         arrows: false,
         centerMode: true,
         centerPadding: '10px',
   }}]});
   slider__pro.on('click', function(){
      sliderModal.fadeIn();
      body.style.overflow = 'hidden';
      clickd = $(this).index();
      sliderModal.show();
      slickSlidermodal.show();
      sliderModal.addClass('slider__modal-open');
      slickSlidermodal.addClass('slider__overflow-open');
      slickSliderfor.slick({
         slidesToShow: 1,
         arrows: true,
         asNavFor: '.slider-nav',
         focusOnSelect: true,
         initialSlide: clickd,
         prevArrow: '<div class="slider-for__prev"></div>',
         nextArrow: '<div class="slider-for__next"></div>',
         centerPadding: '0',
         responsive: [{
         breakpoint: 400,
         settings: {
            arrows: false,
      }}]
      });
      slickSlidernav.slick({
         slidesToShow: 5,
         arrows: false,
         asNavFor: '.slider-for',
         focusOnSelect: true,
         initialSlide: clickd,
         centerPadding: '10px',
         responsive: [{
         breakpoint: 400,
         settings: {
            slidesToShow: 3,
            arrows: false,
            centerMode: true,
            centerPadding: '20px',
      }}]
      });
   });
   exitBtn.on('click', function(){
      body.style.overflow = '';
      sliderModal.hide();
      sliderModal.removeClass('slider__modal-open');
      slickSlidermodal.removeClass('slider__overflow-open');
      slickSliderfor.slick('unslick');
      slickSlidernav.slick('unslick');
   });
   slickSlidermodal.on('click', function(){
      body.style.overflow = '';
      sliderModal.hide();
      sliderModal.removeClass('slider__modal-open');
      slickSlidermodal.removeClass('slider__overflow-open');
      slickSliderfor.slick('unslick');
      slickSlidernav.slick('unslick');
   })
});
$(document).ready(function () {
   $slick_slider = $('.section-gallery__carousel');
   settings = {
      speed: 1200,
      prevArrow:
         '<img src="img/gallery/arrowBack.svg" alt="Back" class="section-gallery__carousel-prev">',
      nextArrow:
         '<img src="img/gallery/arrowForward.svg" alt="Forward" class="section-gallery__carousel-next">',
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      arrows: true,
      autoplay: true,
      centerMode: true,
      centerPadding: '0',
      responsive: [
         {
            breakpoint: 768,
            settings: 'unslick',
         },
      ],
   }
   $slick_slider.slick(settings);
   $(window).on('resize', function() {
     if ($(window).width() < 769) {
       if ($slick_slider.hasClass('slick-initialized')) {
         $slick_slider.slick('unslick');
       }
       return
     }
   
     if (!$slick_slider.hasClass('slick-initialized')) {
       return $slick_slider.slick(settings);
     }
   });
   $(".rev__slider-buyers").slick({
      speed: 1200,
      prevArrow:
         '<img src="img/gallery/arrowBack.svg" alt="Back" class="rev__arrow_back">',
      nextArrow:
         '<img src="img/gallery/arrowForward.svg" alt="Forward" class="rev__arrow_next">',
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 1650,
            settings: {
               slidesToShow: 3,
            },
         },
         {
            breakpoint: 800,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
            },
         },
         {
            breakpoint: 580,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   });
   $(".rev__slider-clients").slick({
      speed: 1200,
      prevArrow:
         '<img src="img/gallery/arrowBack.svg" alt="Back" class="rev__arrow_back-2">',
      nextArrow:
         '<img src="img/gallery/arrowForward.svg" alt="Forward" class="rev__arrow_next-2">',
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 1650,
            settings: {
               slidesToShow: 3,
            },
         },
         {
            breakpoint: 800,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
            },
         },
         {
            breakpoint: 580,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   });
   $(".result__slider_wrapper").slick({
      speed: 1200,
      prevArrow:
      '<img src="img/result/Vector.svg" alt="" class="arrowBack" />',
      nextArrow:
      '<img src="img/result/VectorNext.svg" alt="" class="arrowNext" />',
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 1650,
            settings: {
               slidesToShow: 1,
            },
         },
         {
            breakpoint: 800,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 580,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   });
   $(".smart_in_slide_img_move_up").slick({
      speed: 1200,
      prevArrow:
      '<div style="display:none"></div>',
      nextArrow:
      '<div class="smart_in_slide_button2"><p>Следующий пример</p><img class="smart_in_slide_button2_strelka" src="img/innovation/strelka1.png" alt=""></div>',
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 1650,
            settings: {
               slidesToShow: 1,
            },
         },
         {
            breakpoint: 800,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 580,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   });
   $(document).ready(function(){
      var clickd;
      var certificate = $('.certificate__block');
      var sliderModal = $('.slider__modal')
      var slickSliderfor = $('.slider-for');
      var slickSlidernav = $('.slider-nav');
      var slickSlidermodal = $('.slider__overflow');
      var body = document.querySelector("body");
      var exitBtn = $('.slider__exit');
      certificate.on('click', function(){
         sliderModal.fadeIn();
         body.style.overflow = 'hidden';
         clickd = $(this).index();
         sliderModal.show();
         slickSlidermodal.show();
         sliderModal.addClass('slider__modal-open');
         slickSlidermodal.addClass('slider__overflow-open');
         slickSliderfor.slick({
            slidesToShow: 1,
            arrows: true,
            asNavFor: '.slider-nav',
            focusOnSelect: true,
            initialSlide: clickd,
            prevArrow: '<div class="slider-for__prev"></div>',
            nextArrow: '<div class="slider-for__next"></div>',
            centerPadding: '0',
            responsive: [{
            breakpoint: 400,
            settings: {
               arrows: false,
         }}]
         });
         slickSlidernav.slick({
            slidesToShow: 5,
            arrows: false,
            asNavFor: '.slider-for',
            focusOnSelect: true,
            initialSlide: clickd,
            centerPadding: '10px',
            responsive: [{
            breakpoint: 400,
            settings: {
               slidesToShow: 3,
               arrows: false,
               centerMode: true,
               centerPadding: '20px',
         }}]
         });
      });
      exitBtn.on('click', function(){
         body.style.overflow = '';
         sliderModal.hide();
         sliderModal.removeClass('slider__modal-open');
         slickSlidermodal.removeClass('slider__overflow-open');
         slickSliderfor.slick('unslick');
         slickSlidernav.slick('unslick');
      });
      slickSlidermodal.on('click', function(){
         body.style.overflow = '';
         sliderModal.hide();
         sliderModal.removeClass('slider__modal-open');
         slickSlidermodal.removeClass('slider__overflow-open');
         slickSliderfor.slick('unslick');
         slickSlidernav.slick('unslick');
      })
   });
   $(document).ready(function(){
      var clickd;
      var energo = $('.energo_in_flex_videoblock_box_text');
      var sliderModal = $('.slider__modal')
      var slickSliderfor = $('.slider-for');
      var slickSlidernav = $('.slider-nav');
      var slickSlidermodal = $('.slider__overflow');
      var body = document.querySelector("body");
      var exitBtn = $('.slider__exit');
      energo.on('click', function(){
         sliderModal.fadeIn();
         body.style.overflow = 'hidden';
         clickd = $(this).index();
         sliderModal.show();
         slickSlidermodal.show();
         sliderModal.addClass('slider__modal-open');
         slickSlidermodal.addClass('slider__overflow-open');
         slickSliderfor.slick({
            slidesToShow: 1,
            arrows: true,
            asNavFor: '.slider-nav',
            focusOnSelect: true,
            initialSlide: clickd,
            prevArrow: '<div class="slider-for__prev"></div>',
            nextArrow: '<div class="slider-for__next"></div>',
            centerPadding: '0',
            responsive: [{
            breakpoint: 400,
            settings: {
               arrows: false,
         }}]
         });
         slickSlidernav.slick({
            slidesToShow: 5,
            arrows: false,
            asNavFor: '.slider-for',
            focusOnSelect: true,
            initialSlide: clickd,
            centerPadding: '10px',
            responsive: [{
            breakpoint: 400,
            settings: {
               slidesToShow: 3,
               arrows: false,
               centerMode: true,
               centerPadding: '20px',
         }}]
         });
      });
      exitBtn.on('click', function(){
         body.style.overflow = '';
         sliderModal.hide();
         sliderModal.removeClass('slider__modal-open');
         slickSlidermodal.removeClass('slider__overflow-open');
         slickSliderfor.slick('unslick');
         slickSlidernav.slick('unslick');
      });
      slickSlidermodal.on('click', function(){
         body.style.overflow = '';
         sliderModal.hide();
         sliderModal.removeClass('slider__modal-open');
         slickSlidermodal.removeClass('slider__overflow-open');
         slickSliderfor.slick('unslick');
         slickSlidernav.slick('unslick');
      })
   });
});

document.querySelector('.header__hamburger').addEventListener('click', function() {
   var menu = document.querySelector('.header__nav');
   var burger = document.querySelector('.header__hamburger');
   var overlay = document.querySelector('.header__overlay');
   var accordion = document.getElementsByClassName("dropbtn");
   var dropdown = document.querySelectorAll('.dropdown-content');

   for (i = 0; i < accordion.length; i++) {
      accordion[i].onclick = function() {
       var popular__panel = this.nextElementSibling;
       if (popular__panel.style.maxHeight){
         popular__panel.style.maxHeight = null;
       } else {
         popular__panel.style.maxHeight = popular__panel.scrollHeight + "px";
       } 
     }
   }

   if (burger.classList.contains("header__hamburger-active")) {
     menu.classList.remove("header__open");
     burger.classList.remove("header__hamburger-active");
     overlay.classList.remove("header__overlay-open");
     for (let i = 0; i < dropdown.length; i++) {
      dropdown[i].style.maxHeight = null;
    }
   } else {
     menu.classList.add("header__open");
     burger.classList.add("header__hamburger-active");
     overlay.classList.add("header__overlay-open");
   }
   overlay.addEventListener('click', () => {
     menu.classList.remove('header__open');
     burger.classList.remove('header__hamburger-active');
     overlay.classList.remove('header__overlay-open');
     for (let i = 0; i < dropdown.length; i++) {
      dropdown[i].style.maxHeight = null;
    }
   });
 })

 // высота звезд относительна блока
 $(function() {
   var height = $('.section-fulllist__block').height(); 
   $('.section-fulllist__height').height(height + 18); 
});

// кнопка переключения
$(".section-rev__clients").click(function() {
   $(".section-rev__clients").addClass("active");
   $(".section-rev__buyers").removeClass("active");
   $(".rev__slider-2").css("opacity", "0");
   $(".rev__slider-2").css("height", "0px");
   $(".rev__slider-2").css("overflow", "hidden");
   $(".rev__slider-1").css("opacity", "1");
   $(".rev__slider-1").css("height", "auto");
   $(".rev__slider-1").css("overflow", "visible");
});

// кнопка переключения
$(".section-rev__buyers").click(function() {
   $(".section-rev__buyers").addClass("active");
   $(".section-rev__clients").removeClass("active");
   $(".rev__slider-1").css("opacity", "0");
   $(".rev__slider-1").css("height", "0px");
   $(".rev__slider-1").css("overflow", "hidden");
   $(".rev__slider-2").css("opacity", "1");
   $(".rev__slider-2").css("height", "auto");
   $(".rev__slider-2").css("overflow", "visible");
});

// кнопка переключения
$(".contacts__office-center").click(function() {
   $(".contacts__office-center").addClass("active");
   $(".contacts__office").removeClass("active");
   $(".contacts__office-2").css("opacity", "0");
   $(".contacts__office-2").css("height", "0px");
   $(".contacts__office-2").css("overflow", "hidden");
   $(".contacts__office-2").css("z-index", "0");
   $(".contacts__office-1").css("opacity", "1");
   $(".contacts__office-1").css("height", "100%");
   $(".contacts__office-1").css("overflow", "visible");
   $(".contacts__office-1").css("z-index", "1");
});

// кнопка переключения
$(".contacts__office").click(function() {
   $(".contacts__office").addClass("active");
   $(".contacts__office-center").removeClass("active");
   $(".contacts__office-1").css("opacity", "0");
   $(".contacts__office-1").css("height", "0px");
   $(".contacts__office-1").css("overflow", "hidden");
   $(".contacts__office-1").css("z-index", "0");
   $(".contacts__office-2").css("opacity", "1");
   $(".contacts__office-2").css("height", "100%");
   $(".contacts__office-2").css("overflow", "visible");
   $(".contacts__office-2").css("z-index", "1");
});

// одинаковая высота
$('.rev__slider-clients').on('setPosition', function () {
   $(this).find('.rev__slide').height('auto');		      
   var slickTrack = $(this).find('.slick-track');		      
   var slickTrackHeight = $(slickTrack).height();		      
   $(this).find('.rev__slide').css('height', slickTrackHeight + 'px');		      
});
$( window ).resize(function() { 
$('.rev__slider-clients').on('setPosition', function () {
     $(this).find('.rev__slide').height('auto');		      
     var slickTrack = $(this).find('.slick-track');		      
     var slickTrackHeight = $(slickTrack).height();		      
     $(this).find('.rev__slide').css('height', slickTrackHeight + 'px');		      
});
})

// одинаковая высота
$('.rev__slider-buyers').on('setPosition', function () {
     $(this).find('.rev__slide').height('auto');		      
     var slickTrack = $(this).find('.slick-track');		      
     var slickTrackHeight = $(slickTrack).height();		      
     $(this).find('.rev__slide').css('height', slickTrackHeight + 'px');		      
});
$( window ).resize(function() { 
$('.rev__slider-buyers').on('setPosition', function () {
     $(this).find('.rev__slide').height('auto');		      
     var slickTrack = $(this).find('.slick-track');		      
     var slickTrackHeight = $(slickTrack).height();		      
     $(this).find('.rev__slide').css('height', slickTrackHeight + 'px');		      
});
})

 // вкл непрозрачность кнопка
 $( document ).ready(function(){
   $(".smart_in_slide_button1").click(function(){
    $(".smart_in_slide__after").toggleClass('active');
    $(".smart_in_slide_button1").toggleClass('active');
   });
 });