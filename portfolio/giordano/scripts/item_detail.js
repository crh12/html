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

let price = 89100; // 주문금액
let number = 0; // 주문수량
let orderPrice = 0; // 총 가격 저장 변수


// ------------------------------------------------------------ 함수
function colorReset(){
  for(let i of color) i.classList.remove('color_active');
};

function sizeReset(){
  for(let i of size) i.classList.remove('size_active');
};

// ------------------------------------------------------------ 초기세팅
shareOpen.style.display = 'none';
colorReset();
sizeReset();

// ------------------------------------------------------------ 이벤트 실행
like.addEventListener('click',(e)=>{
  e.preventDefault();
  like.classList.toggle('like_active');
  if (like.classList = 'like_active') {console.log('참')
  } else (console.log('거짓'));
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