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

let boolean = false;

mainSlideTotal.textContent = mainSlide.length;

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

// ------------------------------------------------------------ 전체 공통
// ------------------------------------------------------------ 오류 ★★★
for(let i of like){
  i.addEventListener('click',(e)=>{
    e.preventDefault();
    boolean = !boolean;
    if(boolean) i.src = './images/like_on_16.png';
    else i.src = './images/like_16.png';
  });
};

// ------------------------------------------------------------ 헤더
console.log(container)
window.addEventListener('scroll', function(){
  if(this.window.scrollY > container[0].offsetTop-200) {
    hdBg.style.backgroundColor = '#fff'
  } else hdBg.style.backgroundColor = 'transparent';
});

// ------------------------------------------------------------ main bnr
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
  slidesPerView:5,
  spaceBetween:25,
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
  slidesPerView:5,
  spaceBetween:25,
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
  slidesPerView:4,
  slidesPerGroup:4,
  spaceBetween:(160 / 3),
  pagination: {
    el: '.gmotion_container .progress_bar',
    type: 'progressbar',
  },
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
  centeredSlides:true,
  slidesPerView:1.5,
  navigation:{
    nextEl:'.mgz_slide_btn .next',
    prevEl:'.mgz_slide_btn .prev',
  },
});