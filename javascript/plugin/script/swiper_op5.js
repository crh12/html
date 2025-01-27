// const newSlide = new Swiper('.new_swiper_wrap'); // 기본형태
const newSlide = new Swiper('.new_swiper_wrap',{
  // 속성:값,
  mousewheel:true, // 웹사이트 수직페이지 전환시에만 사용
  direction:'vertical',
});
const snsSlide = new Swiper('.sns_portfolio',{
  loop:true,
  speed:800,
  autoplay: {
    delay: 2000,
    disableOnInteraction:false,
  },
});