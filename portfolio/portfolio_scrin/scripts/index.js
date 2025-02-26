const mSwiper = new Swiper ('.m_swiper', {
  direction: 'vertical',
  mousewheel: true,
});

const snsSwiper = new Swiper ('.sns_swiper', {
  autoplay:{delay:0,},
  loop:true,
  speed:6000,
  slidesPerView:3,
});

const bnrSwiper = new Swiper ('.bnr_swiper', {
  autoplay:{delay:0,},
  loop:true,
  speed:6000,
  slidesPerView:3,
});

const roundTxt = document.querySelector('.round_txt_wrap');

console.log(mSwiper.activeIndex)

window.addEventListener('scroll',()=>{
  console.log('스크롤')
})
// mSwiper.activeIndex
// mSwiper.addEventListener('activeIndexChange',()=>{
//   console.log('스크롤')
// })
// if (mSwiper.activeIndex = '1') console.log(mSwiper.activeIndex)
// if (mSwiper.activeIndex == '1') roundTxt.style.right == '-117px'