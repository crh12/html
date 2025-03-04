// ------------------------------------------------------------ 변수
const hdBg = document.querySelector('.hd_bg');
const mainSlide = document.querySelectorAll('.main_bnr .swiper-slide');
const mainSlideTotal = document.querySelector('.main_bnr .slide_total');
const mainSlideCurrent = document.querySelector('.main_bnr .slide_current');
const mainBar = document.querySelector('.main_bnr .progress_bar');
const container = document.querySelectorAll('.container');
const like = document.querySelectorAll('main .like img')
const bestCate = document.querySelectorAll('.best_container .category li a');
const newCate = document.querySelectorAll('.new_container .category li a');
const gCate = document.querySelectorAll('.gmotion_container .category li a');
const gSlideCurrent = document.querySelector('.gmotion_container .slide_current');
const mgzList = document.querySelector('.mgz_swiper .swiper-wrapper');
const mgzSlides = document.querySelectorAll('.mgz_swiper .swiper-wrapper .swiper-slide');

let boolean = false;

mainSlideTotal.textContent = mainSlide.length;

console.log(mgzList)

// ------------------------------------------------------------ 함수
function bestReset(){
  for(let i of bestCate) i.classList.remove('active');
};

function newReset(){
  for(let i of newCate) i.classList.remove('active');
};

function gReset(){
  for(let i of gCate) i.classList.remove('active');
};

// ------------------------------------------------------------ 초기세팅
for (let i of mgzSlides){/* 1.5개 슬라이드 표시 -> 슬라이드 3개여서 전체 복제 */
  const clone = i.cloneNode(true);
  mgzList.appendChild(clone);
};

// ------------------------------------------------------------ 전체 공통
for(let i of like){
  i.addEventListener('click',(e)=>{
    e.preventDefault();
    boolean = !boolean;
    if(boolean) i.src = './images/like_on_16.png';
    else i.src = './images/like_16.png';
  });
};

// ------------------------------------------------------------ 헤더
window.addEventListener('scroll', function(){
  if(this.window.scrollY > container[0].offsetTop-200) {
    hdBg.style.backgroundColor = '#fff'
  } else hdBg.style.backgroundColor = '';
});

// ------------------------------------------------------------ main bnr
const mainSwiper = new Swiper('.main_swiper',{
  autoplay:{delay:2500,},
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
  pagination: {
    el: '.main_bnr .progress_bar',
    type: 'progressbar',
  },
});


// ------------------------------------------------------------ best
const bestSwiper = new Swiper('.best_swiper1',{
  loop:true,
  navigation:{
    nextEl:'.best_slide_btn .next',
    prevEl:'.best_slide_btn .prev',
  },
  breakpoints:{ /* 반응형 */
    1600:{/* 1600 이상 사이 너비 25px*/
      spaceBetween:25,
      slidesPerView:5,
    },
    1200:{/* 1200 ~ 1599 사이 */
      spaceBetween:10,
      slidesPerView:5,
    },
    1000:{/* 1000 ~ 1199 사이 */
      spaceBetween:10,
      slidesPerView:4,
    },
    600:{/* 600 ~ 999 사이 */
      spaceBetween:10,
      slidesPerView:3,
    },
    0:{/* 0 ~ 599 */
      spaceBetween:10,
      slidesPerView:2,
    },
  }
});

for(let i of bestCate){
  i.addEventListener('click',(e)=>{
    e.preventDefault();
    bestReset();
    i.classList.add('active')
  });
};

// ------------------------------------------------------------ new
const newSwiper = new Swiper('.new_swiper1',{
  loop:true,
  navigation:{
    nextEl:'.new_slide_btn .next',
    prevEl:'.new_slide_btn .prev',
  },
  breakpoints:{ /* 반응형 */
    1600:{/* 1600 이상 사이 너비 25px*/
      spaceBetween:25,
      slidesPerView:5,
    },
    1200:{/* 1200 ~ 1599 사이 */
      spaceBetween:10,
      slidesPerView:5,
    },
    1000:{/* 1000 ~ 1199 사이 */
      spaceBetween:10,
      slidesPerView:4,
    },
    600:{/* 600 ~ 999 사이 */
      spaceBetween:10,
      slidesPerView:3,
    },
    0:{/* 0 ~ 599 */
      spaceBetween:10,
      slidesPerView:2,
    },
  }
});

for(let i of newCate){
  i.addEventListener('click',(e)=>{
    e.preventDefault();
    newReset();
    i.classList.add('active')
  });
};

// ------------------------------------------------------------ md
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


// ------------------------------------------------------------ g-motion
const gSwiper = new Swiper('.g_swiper',{
  loop:true,
  navigation:{
    nextEl:'.gmotion_container .next',
    prevEl:'.gmotion_container .prev',
  },
  pagination: {
    el: '.gmotion_container .progress_bar',
    type: 'progressbar',
  },
  breakpoints:{ /* 반응형 */
    1600:{/* 1600 이상 사이 너비 50px */
      spaceBetween:50,
      slidesPerView:4,
    },
    1200:{/* 1200 ~ 1599 사이 너비 18px */
      spaceBetween:18,
      slidesPerView:4,
    },
    1000:{/* 1000 ~ 1199 사이 */
      spaceBetween:18,
      slidesPerView:3,
    },
    600:{/* 600 ~ 999 사이 */
      spaceBetween:18,
      slidesPerView:2,
    },
    0:{/* 0 ~ 599 */
      spaceBetween:0,
      slidesPerView:1,
    },
  }
});

for(let i of gCate){
  i.addEventListener('click',(e)=>{
    e.preventDefault();
    gReset();
    i.classList.add('active')
  });
};

// ------------------------------------------------------------ magazine
const mgzSwiper = new Swiper('.mgz_swiper',{
  loop:true,
  autoplay:{delay:3000,},
  navigation:{
    nextEl:'.mgz_slide_btn .next',
    prevEl:'.mgz_slide_btn .prev',
  },
  breakpoints:{ /* 반응형 */
    1200:{/* 1200 이상 */
      slidesPerView:1.5,
      centeredSlides:true,
    }, 
    0:{slidesPerView:1,}, /* 0 ~ 1199 사이 */
  }
});

