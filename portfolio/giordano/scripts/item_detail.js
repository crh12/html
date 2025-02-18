const thumnail = document.querySelectorAll('.thum_wrap a img');
const bigImg = document.querySelector('.p_img img');

function bigSrc(num){
  return bigImg.src = `./images/productImg_00${num}.jpg`;
};

thumnail[0].addEventListener('mouseover', function(){
  bigSrc(1);
})
thumnail[1].addEventListener('mouseover', function(){
  bigSrc(2);
})
thumnail[2].addEventListener('mouseover', function(){
  bigSrc(3);
})
thumnail[3].addEventListener('mouseover', function(){
  bigSrc(4);
})
thumnail[4].addEventListener('mouseover', function(){
  bigSrc(5);
})
thumnail[5].addEventListener('mouseover', function(){
  bigSrc(6);
})

// ------------------------------------------------------------ 변수
const like = document.querySelector('.like img');
const share = document.querySelector('.share');
const shareOpen = document.querySelector('.share_open');
const color = document.querySelectorAll('.color dd a');
const size = document.querySelectorAll('.size dd a');
const productNum = document.querySelector('#product_num');
const numMinus = document.querySelector('#minus');
const numPlus = document.querySelector('#plus');
const totalPrice = document.querySelector('.total_contents .total_price');
const dTitle = document.querySelectorAll('.d_title li');
const dMore = document.querySelector('#d_more');
const dContent = document.querySelector('.d_content');
console.log(dContent.nextElementSibling)

let price = 89100; // 주문금액
let number = 0; // 주문수량
let orderPrice = 0; // 총 가격 저장 변수

let boolean = false;

console.log(boolean)
// ------------------------------------------------------------ 함수
function likeOn(){
  if (like.classList = 'like_active') {console.log('참')
  } else (console.log('거짓'));
};

function colorReset(){
  for(let i of color) i.classList.remove('color_active');
};

function sizeReset(){
  for(let i of size) i.classList.remove('size_active');
};

function dTitleReset(){
  for(let i of dTitle) i.classList.remove('active');
};

// ------------------------------------------------------------ 초기세팅
shareOpen.style.display = 'none';
colorReset();
sizeReset();
productNum.value = 0;

// ------------------------------------------------------------ 이벤트 실행
// ------------------------------------------------------------ 주문 (오른쪽)
like.addEventListener('click',(e)=>{
  e.preventDefault();
  boolean = !boolean;
  if(boolean) like.src = './images/like_on_red_24.png';
  else like.src = './images/like_red_24.png';
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
for (let i of dTitle){
  i.addEventListener('click',(e)=>{
    e.preventDefault();
    dTitleReset();
    i.classList.toggle('active');
    
  })
};

// ------------------------------------------------------------ 펼쳐보기
dMore.addEventListener('click',()=>{
  boolean = !boolean;
  if(boolean) dContent.style.height = 'max-content';
  else dContent.style.height = '1000px';
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