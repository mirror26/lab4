let sliderEl = document.querySelector('.slider');
if (sliderEl.classList.contains('slider__index')) {
   $(document).ready(function () {
      $('.slider').slick(
         {
            arrows: false,
            dots: true,
            adaptiveHeight: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 1000,
            easing: 'easy-out',
            infinite: false,
            initialSlide: 0,
            autoplay: false,
            autoplaySpeed: 3000,
            pauseOnFocus: true,
            pauseOnHover: true,
            pauseOnDotsHover: true,
            draggable: true,
            swipe: true,
            touchThreshold: 10,
            centerMode: false,
            fade: false,
            responsive: [
               {
                  breakpoint: 950,
                  settings: {
                     slidesToShow: 1,
                  }
               }
            ],
            mobileFirst: false,
         }
      );
   });
}
else if (sliderEl.classList.contains('slider__club')) {
   $(document).ready(function () {
      $('.slider').slick(
         {
            arrows: false,
            dots: true,
            adaptiveHeight: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            easing: 'easy-out',
            infinite: true,
            initialSlide: 0,
            autoplay: false,
            autoplaySpeed: 2000,
            pauseOnFocus: true,
            pauseOnHover: true,
            pauseOnDotsHover: true,
            draggable: true,
            swipe: true,
            touchThreshold: 10,
            centerMode: false,
            fade: false,
            mobileFirst: false,
         }
      );
   });

}


let gifEl = document.querySelector('.subs__swipe');
if (sliderEl != null && gifEl != null) {
   sliderEl.onmousedown = sliderEl.ontouchstart = function () {
      gifEl.classList.add('disable');
   }
}
