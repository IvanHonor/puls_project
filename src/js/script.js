$(document).ready(function(){
    $('.carousel__inner').slick({
       speed: 1200,
       adaptiveHeight: true,
       prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png"></button>', 
       nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png"></button>',
       responsive: [
        {
          breakpoint: 991,
          settings: {
            dots: true,
            arrows: false
          }
        },
       /*   {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
       {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }  */
      ]
    });
  });