const mainSlide = document.querySelectorAll('.main_swiper .swiper-slide');
const mainSlideTotal = document.querySelector('.slide_total');
const mainSlideCurrent = document.querySelector('.slide_current');

mainSlideTotal.textContent = mainSlide.length;

const mainSwiper = new Swiper('.main_swiper',{
  // autoplay:{delay:2500,},
  loop:true,
  navigation:{
    nextEl:'.progress_btn .next',
    prevEl:'.progress_btn .prev',
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
  }
});