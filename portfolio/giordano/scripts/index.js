const mainSlide = document.querySelectorAll('.main_bnr .swiper-slide');
const mainSlideTotal = document.querySelector('.main_bnr .slide_total');
const mainSlideCurrent = document.querySelector('.main_bnr .slide_current');
const gSlideCurrent = document.querySelector('.gmotion_container .slide_current');

mainSlideTotal.textContent = mainSlide.length;

const mainSwiper = new Swiper('.main_swiper',{
  // autoplay:{delay:2500,},
  loop:true,
  navigation:{
    nextEl:'.main_bnr .next',
    prevEl:'.main_bnr .prev',
  },
  on:{
    slideChange:function(){
      mainSlideCurrent.textContent = this.realIndex+1;
    }
  },
});

const bestSwiper = new Swiper('.best_swiper1',{
  loop:true,
  navigation:{
    nextEl:'.best_slide_btn .next',
    prevEl:'.best_slide_btn .prev',
  },
  slidesPerView:5,
  spaceBetween:25,
});
// bestSwiper.addEventListener('mouseover',()={

// })

const newSwiper = new Swiper('.new_swiper1',{
  loop:true,
  navigation:{
    nextEl:'.new_slide_btn .next',
    prevEl:'.new_slide_btn .prev',
  },
  slidesPerView:5,
  spaceBetween:25,
});

const mdSwiper = new Swiper('.md_swiper',{
  loop:true,
  navigation:{
    nextEl:'.md_slide_btn .next',
    prevEl:'.md_slide_btn .prev',
  },
  pagination: {
    el: '.md_swiper .swiper-pagination',
    clickable: true,
  },
});

const gSwiper = new Swiper('.g_swiper',{
  loop:true,
  navigation:{
    nextEl:'.gmotion_container .next',
    prevEl:'.gmotion_container .prev',
  },
  slidesPerView:4,
  slidesPerGroup:4,
  spaceBetween:(160 / 3),
});

const mgzSwiper = new Swiper('.mgz_swiper',{
  loop:true,
  // centeredSlides:true,
  navigation:{
    nextEl:'.mgz_slide_btn .next',
    prevEl:'.mgz_slide_btn .prev',
  },
});