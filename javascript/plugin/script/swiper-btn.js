const eventSwiper = new Swiper('.event-swiper',{
  autoplay:{delay:2500,},
  loop:true,
  /* (기본) 페이지번호 */
  pagination:{
    el:'.event-swiper+.swiper-pagination',
    type:'bullets',
    clickable: true,
    dynamicBullets:true,
  },
  navigation:{
    nextEl:'.event-swiper+.btn .next',
    prevEl:'.event-swiper+.btn .prev',
  }
});
