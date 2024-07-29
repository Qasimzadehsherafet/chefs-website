
var swiper = new Swiper(".services__img", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".services__button .fa-chevron-right",
      prevEl: ".services__button .fa-chevron-left",
    },
    breakpoints: {
        600:{
            slidesPerView: "auto",
        },
    }
  });


  var swiper = new Swiper(".Ourteam__boxs", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".Ourteam__icon .fa-chevron-right",
      prevEl: ".Ourteam__icon .fa-chevron-left",
    },
    breakpoints: {
  
        968:{
            slidesPerView: 2,
        },
        1200:{
          slidesPerView:3
        }
        
    }
  });