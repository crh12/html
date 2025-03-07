// ------------------------------------------------------------ 변수
const container = document.querySelectorAll('.container');
const like24 = document.querySelector('.like24 img');
const share = document.querySelector('.share');
const shareOpen = document.querySelector('.share_open');
const color = document.querySelectorAll('.color dd a');
const size = document.querySelectorAll('.size dd a');
const productNum = document.querySelector('#product_num');
const numMinus = document.querySelector('#minus');
const numPlus = document.querySelector('#plus');
const totalPrice = document.querySelector('.total_contents .total_price');
const like = document.querySelectorAll('main .like img')
const reviewScroll = document.querySelector('.review_contents a')
const dMenu = document.querySelectorAll('.d_title li');
const dMore = document.querySelector('#d_more');
const dContent = document.querySelector('.d_content');
const reviewAlign = document.querySelectorAll('.review_container .align a');
const filterPop = document.querySelectorAll('.filter li div');
const cartPopup = document.querySelector('.cart_open_bg');
const cartBtn = document.querySelector('#cart_btn');
const shoppingBtn = document.querySelector('.link a:nth-child(1)');

let price = 89100; // 주문금액
let number = 0; // 주문수량
let orderPrice = 0; // 총 가격 저장 변수

let boolean = false;

// ------------------------------------------------------------ 함수
function activeReset(name){
  for(let i of name) i.classList.remove('active');
};

function displayNone(name){
  for(let i of name) i.style.display = 'none';
};

function dMoreEvent(){
  boolean = !boolean;
  if(boolean) {
    dContent.style.height = 'max-content';
    dMore.firstElementChild.textContent = '접어두기';
    dMore.lastElementChild.style.transform = 'scaleY(-1)';
  } else {
    dContent.style.height = '1000px';
    dMore.firstElementChild.textContent = '펼쳐보기';
    dMore.lastElementChild.style.transform = '';
  }
};


// ------------------------------------------------------------ 초기세팅
shareOpen.style.display = 'none';
activeReset(color);
activeReset(size);
totalPrice.textContent = 0;
productNum.value = 0;
displayNone(filterPop);

// ------------------------------------------------------------ 이벤트 실행
// ------------------------------------------------------------ 섬네일 (왼쪽)
const thumnail = document.querySelectorAll('.thum_wrap a img');
const bigImg = document.querySelector('.p_img img');

thumnail.forEach((target, index)=>{
  target.addEventListener('mouseover', ()=>{
    bigImg.src = `./images/productImg_00${index + 1}.jpg`;
  });
});
// ------------------------------------------------------------ 주문 (오른쪽)
like24.addEventListener('click',(e)=>{
  e.preventDefault();
  boolean = !boolean;
  if(boolean) like24.src = './images/like_on_24.png';
  else like24.src = './images/like_red_24.png';
});

reviewScroll.addEventListener('click',(e)=>{
  e.preventDefault();
  window.scrollTo({
    top: container[2].offsetTop - 135,
    behavior: 'smooth'
  });
});

share.addEventListener('mouseover',()=>{
  shareOpen.style.display = 'flex';
});
shareOpen.addEventListener('mouseover',()=>{
  shareOpen.style.display = 'flex';
});
shareOpen.addEventListener('mouseout',()=>{
  shareOpen.style.display = 'none';
});

for(let i of color){
  i.addEventListener('click',(e)=>{
    e.preventDefault();
    activeReset(color);
    i.classList.toggle('active')
  })
};

for(let i of size){
  i.addEventListener('click',(e)=>{
    e.preventDefault();
    activeReset(size);
    i.classList.toggle('active')
  })
};

numMinus.addEventListener('click',()=>{
  if (productNum.value > 0) number--;
  productNum.value = number;
  orderPrice = price * number;
  totalPrice.textContent = `${orderPrice.toLocaleString('ko-kr')}`
});

numPlus.addEventListener('click',()=>{
  number++;
  productNum.value = number;
  orderPrice = price * number;
  totalPrice.textContent = `${orderPrice.toLocaleString('ko-kr')}`;
});

// ------------------------------------------------------------ 탭메뉴
dMenu.forEach((target, index)=>{
  target.addEventListener('click',(e)=>{
    e.preventDefault();
    activeReset(dMenu);
    target.classList.toggle('active');
    if (index === 0){
      window.scrollTo({
        top: dContent.children[index].offsetTop - 135,
        behavior: 'smooth'
      });
    } else if (index === 1) {
      dMoreEvent();
      window.scrollTo({
        top: dContent.lastElementChild.offsetTop - 135,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: container[index].offsetTop - 135,
        behavior: 'smooth'
      });
    };
  })
});

// ------------------------------------------------------------ 펼쳐보기
dMore.addEventListener('click',()=>{
  dMoreEvent();
});

// ------------------------------------------------------------ 리뷰
for (let i of reviewAlign){
  i.addEventListener('click', (e)=>{
    e.preventDefault();
    activeReset(reviewAlign);
    i.classList.toggle('active');
  })
};

for (let i of filterPop){
  i.parentElement.addEventListener('click', (e)=>{
    e.preventDefault();
    if (i.style.display == 'none') {
      displayNone(filterPop);
      i.style.display = 'flex';
    }
    else i.style.display = 'none';
  });
};

// ------------------------------------------------------------ 상품 위시리스트
for(let i of like){
  i.addEventListener('click',(e)=>{
    e.preventDefault();
    boolean = !boolean;
    if(boolean) i.src = './images/like_on_16.png';
    else i.src = './images/like_16.png';
  });
};

// ------------------------------------------------------------ 추천상품 (2행)
const purSwiper = new Swiper('.pur_swiper', {
  loop:true,
  slidesPerView:4,
  spaceBetween:(40 / 3),
  navigation:{
    nextEl:'.pur_swiper .next',
    prevEl:'.pur_swiper .prev',
  },
  breakpoints:{ /* 반응형 */
    1400:{
      slidesPerView:4,
      spaceBetween:(40 / 3),
    },
    1200:{/* 1200 이상 */
      slidesPerView:3,
      spaceBetween:8,
    },
    1000:{/* 1000 ~ 1199 사이 */
    },
    600:{/* 600 ~ 999 사이 */
    },
    0:{/* 0 ~ 599 */
    },
  }
});

const simSwiper = new Swiper('.sim_swiper', {
  loop:true,
  slidesPerView:4,
  spaceBetween:(40 / 3),
  navigation:{
    nextEl:'.sim_swiper .next',
    prevEl:'.sim_swiper .prev',
  },
  breakpoints:{ /* 반응형 */
    1400:{
      slidesPerView:4,
      spaceBetween:(40 / 3),
    },
    1200:{/* 1200 이상 */
      slidesPerView:3,
      spaceBetween:8,
    },
    1000:{/* 1000 ~ 1199 사이 */
    },
    600:{/* 600 ~ 999 사이 */
    },
    0:{/* 0 ~ 599 */
    },
  }
});

// ------------------------------------------------------------ 장바구니 안내 팝업
cartPopup.style.display = 'none';
cartBtn.addEventListener('click',()=>{
  cartPopup.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

shoppingBtn.addEventListener('click',()=>{
  cartPopup.style.display = 'none';
  document.body.style.overflow = 'auto';
});