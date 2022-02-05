"use strict";
document.querySelector('.top-btn').onmousedown = () => {
   // document.querySelector('.header-top__text').style.fontSize = 0;
   document.querySelector('.header-top').style.opacity = 0;
}

///////////burger///////

$(document).ready(function(){
   $('.header__burger').click(function(event){
     $('.header__burger, .nav').toggleClass('active');
     $('body').toggleClass('lock');
   });
 });


 $(document).ready(function() {
    $('.nav__link').click(function(event) {
        $('.header__burger, .nav').removeClass('active');
        $('body').removeClass('lock');
    });
});

/////////////////

let input = document.querySelector('.search__input');
let btnOpen = document.querySelector('.search__btn');
let btnClose =  document.querySelector('.close__btn');

btnOpen.addEventListener('click', function(){
   input.classList.add('active')
   btnClose.classList.add('active')
})
btnClose.addEventListener('click', function(){
   input.classList.remove('active')
   this.classList.remove('active')
})

///////////////////////////////
$(document).ready(function(){
   $('.trending__slider').slick({
      dots: true,
      infinite:true,
      speed: 400,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay:true,
      dots:true,
      arrows: true,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
          }
        }
      ]
   });
 });

 
$(document).ready(function(){
   $('.instagram__slider').slick({
      dots: true,
      infinite:true,
      speed: 600,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay:true,
      dots:false,
      arrows: false,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 5,
            infinite: true,
          }
        },
        {
          breakpoint: 885,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 690,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 495,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 350,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            // centerPadding: '60px',
          }
        }
      ]
   });
 });
    