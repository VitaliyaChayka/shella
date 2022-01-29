"use strict";
document.querySelector('.top-btn').onmousedown = () => {
   // document.querySelector('.header-top__text').style.fontSize = 0;
   document.querySelector('.header-top').style.opacity = 0;
}

///////////burger///////
// document.querySelector(document).ready(function(){
//    document.querySelector('.header__burger').click(function(event){
//      document.querySelector('.header__burger, .nav').classList.toggle('active');
//      document.querySelector('body').classList.toggle('lock');
//    });
//  });


//  document.querySelector(document).ready(function() {
//     document.querySelector('.nav__link').click(function(event) {
//         document.querySelector('.header__burger, .nav').removeClass('active');
//         document.querySelector('body').removeClass('lock');
//     });
// });



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
