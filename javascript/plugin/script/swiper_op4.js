// const newSlide = new Swiper('.new_swiper_wrap'); // 기본형태
const newSlide = new Swiper('.new_swiper_wrap',{
  // 속성:값,
  autoplay:{
    delay:2000, // 다음슬라이드 전환까지 대기시간
    disableOnInteration:false, // 사용자 상호작용 상관없이 계속 진행
  },
  loop:true, // 무한반복설정
  mousewheel:true, // 웹사이트 수직페이지 전환시에만 사용
  slidesPerView:3, // 한번에 표시되는 슬라이드 개수
  // 표시 슬라이드 개수보다 실제 슬라이드 개수가 많아야함!!
  spaceBetween:20,
  breakpoints:{
    1200: {slidesPerView:3,}, // 1200 이상일 때 3개
    800: {slidesPerView:2,}, // 800 이상일 때 2개
    320: {slidesPerView:1,}, // 320 이상일 때 1개
  },
});