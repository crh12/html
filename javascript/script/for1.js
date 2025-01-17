// 반복문 for
// for(초기값; 조건식; 증감식) {조건이 참일 때 실행구문}
// 반복문 없이 '자바스크립트' 3번 반복
/* console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트'); */
/* for(let i=1; i<=3; i++){
  console.log('자바스크립트');
} */
for(let i=2; i>=0; i--){
  console.log('자바스크립트'+i);
}

const subject = ['html','css','photoshop','illustrator','javascript'];
/* console.log(subject[0])
console.log(subject[1])
console.log(subject[2])
console.log(subject[3])
console.log(subject[4]) */
for(let i=0; i<=4; i++){
  console.log(subject[i]);
}

const kiosk = ['아메리카노','카페라떼','카푸치노','돌체라떼','에스프레소','우유','녹차라떼','소이라떼','밀크티'];
// 출력예) 주문하신 아메리카노 나왔습니다.
/* for(let i=0; i<=kiosk.length-1; i++){
  console.log(`주문하신 ${kiosk[i]} 나왔습니다 :D`);
} */
// length속성 없이 숫자값과 for문으로 역순으로 메뉴 출력하기
/* for(let i=8; i>=0; i--){
  console.log(`주문하신 ${kiosk[i]} 나왔습니다 :D`);
} */
for(let i=kiosk.length-1; i>=0; i--){
  console.log(`주문하신 ${kiosk[i]} 나왔습니다 :D`);
}

console.log('=================== 반복문과 조건문')
// 1~20 반복 출력
for(let i=1; i<21; i++){
  if(i%2) console.log(i);
}

const listLi = document.querySelectorAll('.list li');
console.log(listLi);
/* listLi[0].style.backgroundColor = 'aqua';
listLi[1].style.backgroundColor = 'aqua';
listLi[2].style.backgroundColor = 'aqua';
listLi[3].style.backgroundColor = 'aqua';
listLi[4].style.backgroundColor = 'aqua';
listLi[5].style.backgroundColor = 'aqua'; */
for(let i=0; i<listLi.length; i++){
  /* 홀수(aqua) 짝수(yellow) */
  if(i%2 === 0) listLi[i].style.backgroundColor = 'lightblue';
  else listLi[i].style.backgroundColor = 'lightyellow';
}

console.log('=================== for in 객체접근 반복문')
let str1 = '가나다라마바사';
let cat1 = {
  color:['white','black'],
  age:2,
  name:'고양이',
}

for(let i in str1) console.log(i)
for(let i in cat1){
  // console.log(i); // 객체 속성 접근
  console.log(i, cat1[i]);
}

console.log('=================== 배열, DOM 접근 for of')
const fruit = ['바나나','딸기','배','귤','망고'];
for(let i of fruit) console.log(i);

for(let i of listLi) {
  console.log(i);
  i.addEventListener('mouseover',()=>{
    i.style.borderBottom = '2px solid #000'
  })
  i.addEventListener('mouseout',()=>{
    i.style.borderBottom = 'none'
  })
}

console.log('=================== 회원가입약관동의')
// 1. "checkAll" 전체 동의 클릭 시
// 2. "checkSelect" 선택동의 1 ~ 4 모두 선택
// 3. 전체 동의 클릭 시
// 4. 선택 동의 1 ~ 4 모두 해제
// 1~4 반복

const checkAll = document.querySelector('#all');
const checkSelect = document.querySelectorAll('.select input[name=agree]')

console.log(checkAll, checkSelect)


checkAll.addEventListener('click',()=>{
  // console.log(checkAll.checked);
  /*   checkSelect[0].checked = checkAll.checked;
  checkSelect[1].checked = checkAll.checked;
  checkSelect[2].checked = checkAll.checked;
  checkSelect[3].checked = checkAll.checked; */
  for(let i of checkSelect){
    i.checked = checkAll.checked;
  }
})

// =================== 메인메뉴와 서브메뉴
const gnb = document.querySelectorAll('.gnb > li');
const sub = document.querySelectorAll('.sub');
console.log(gnb,sub);
// 모든 서브 숨기기 (초기세팅)
for(let i of sub)i.style.display = 'none';
// (for X) 메뉴1 마우스 올렸을 때 서브1 출력
/* gnb[0].addEventListener('mouseover',()=>sub[0].style.display = 'block')
gnb[1].addEventListener('mouseover',()=>sub[1].style.display = 'block')
gnb[2].addEventListener('mouseover',()=>sub[2].style.display = 'block')
gnb[3].addEventListener('mouseover',()=>sub[3].style.display = 'block') */
// (for 0) 메뉴1~4 마우스 올렸을 때 서브 1~4 출력
for(let i of gnb){
  console.log(i) // Node 4 전체 출력
  i.addEventListener('mouseover',()=>{
    // console.log(i); // 마우스 올린 대상만 출력
    console.log(i.children[1]); // 마우스 올린 대상의 자식
    i.children[1].style.display = 'block';
  })
}