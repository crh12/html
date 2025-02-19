const thumnail = document.querySelectorAll('.thum_wrap a img');
const bigImg = document.querySelector('.p_img img');

thumnail.forEach((target, index)=>{
  target.addEventListener('mouseover', ()=>{
    bigImg.src = `./images/productImg_00${index + 1}.jpg`;
  });
});

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
const dMenu = document.querySelectorAll('.d_title li');
const dMore = document.querySelector('#d_more');
const dContent = document.querySelector('.d_content');

let price = 89100; // 주문금액
let number = 0; // 주문수량
let orderPrice = 0; // 총 가격 저장 변수

let boolean = false;
// ------------------------------------------------------------ 함수
function colorReset(){
  for(let i of color) i.classList.remove('color_active');
};

function sizeReset(){
  for(let i of size) i.classList.remove('size_active');
};

function dMenuReset(){
  for(let i of dMenu) i.classList.remove('active');
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
colorReset();
sizeReset();
productNum.value = 0;

// ------------------------------------------------------------ 이벤트 실행
// ------------------------------------------------------------ 주문 (오른쪽)
like24.addEventListener('click',(e)=>{
  e.preventDefault();
  boolean = !boolean;
  if(boolean) like24.src = './images/like_on_24.png';
  else like24.src = './images/like_red_24.png';
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
    colorReset();
    i.classList.toggle('color_active')
  })
};

for(let i of size){
  i.addEventListener('click',(e)=>{
    e.preventDefault();
    sizeReset();
    i.classList.toggle('size_active')
  })
};

numMinus.addEventListener('click',()=>{
  if (productNum.value > 0) number--;
  productNum.value = number;
  orderPrice = price * number;
  totalPrice.textContent = `${orderPrice}`
});

numPlus.addEventListener('click',()=>{
  number++;
  productNum.value = number;
  orderPrice = price * number;
  totalPrice.textContent = `${orderPrice.toLocaleString('ko-kr')}`
});

// ------------------------------------------------------------ 탭메뉴
dMenu.forEach((target, index)=>{
  target.addEventListener('click',(e)=>{
    e.preventDefault();
    dMenuReset();
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

// ------------------------------------------------------------ 추천상품 (2행)
const purSwiper = new Swiper('.pur_swiper', {
  loop:true,
  slidesPerView:4,
  spaceBetween:(40 / 3),
  navigation:{
    nextEl:'.pur_swiper .next',
    prevEl:'.pur_swiper .prev',
  },
});

const simSwiper = new Swiper('.sim_swiper', {
  loop:true,
  slidesPerView:4,
  spaceBetween:(40 / 3),
  navigation:{
    nextEl:'.sim_swiper .next',
    prevEl:'.sim_swiper .prev',
  },
});