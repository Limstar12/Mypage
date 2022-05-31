window.onload=function(){
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        slidesPerView: 1,
        loop: true,
        //centeredSlides: true,
        effect: "fade",
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}