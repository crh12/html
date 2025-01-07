// window.document.body.style = 'background-color:aqua';
document.write('250107'); // window 생략 (기본 내장됨)
// DOM
// 객체는 변수에 선언해야 한다.
// 변수생성키워드 생성변수명 = 변수에대입되는값;
// 변수 선언 시 [] 배열선언표시 없이 복수형 데이터를 저장하면 자동으로 배열로 인식된다.
// 배열 인식 결과 -> 각 데이터가 [0] [1] 인덱스로 구분되고 length 속성이 자동 추가된다.
const title1 = document.getElementsByTagName('h1');
const title2 = document.getElementsByTagName('h2');
console.log(title1);
console.log(title2);
// DOM객체.속성         // 속성 읽기
// DOM객체.속성 = '값'; // 속성에 값 대입하기
title1[0].style = 'color:red';
title1[1].style = 'background-color:coral';
title2[0].style = 'color:blue';
title2[1].style = 'border:2px solid #000';
title2[2].style = 'letter-spacing:1.2em';
const listWrap = document.getElementsByTagName('ul')[0];
const list = listWrap.getElementsByTagName('li');
console.log(listWrap);
console.log(list);
listWrap.style = 'background-color:aqua';
list[0].style = 'background-color:yellow';
list[1].style = 'background-color:pink';
list[2].style = 'background-color:coral';
const listWrap2 = document.getElementsByTagName('ul')[1];
const list2 = listWrap2.getElementsByTagName('li');
const list2a1 = list2[0].getElementsByTagName('a');
const list2a2 = list2[1].getElementsByTagName('a');
const list2aAll = listWrap2.getElementsByTagName('a');
console.log(listWrap2);
console.log(list2);
console.log(list2a1);
console.log(list2a1,list2a2);
console.log(list2aAll);
listWrap2.style = 'background-color:lightblue'
list2[0].style = 'padding:10px';
list2[1].style = 'border:1px solid #000';
/* HTML, CSS 작성 시 HTML의 가족관계를 우선시 하여 li가 형제, a는 각 외동으로 각각 인식하지만 JS는 최종 선택 대상 앞의 'document' 자리에 누굴 쓰느냐에 따라 그 안에 있는 태그 전체를 순서대로 인식하기 때문에 실제 HTML 관계에서 a가 외동이든 아니든 'ul'을 선택했다면 ul 안 모든 a를 순서대로 인식해서 인덱스 번호를 적용한다. 하지만 'li'의 경우 li 안에는 a가 하나씩 밖에 배치안되어있으므로 각 a를 0번째로만 인식하게 된다.*/
document.getElementsByClassName
const subTitle = document.getElementsByClassName('sub_title')[0];
console.log(subTitle);
subTitle.style = 'background-color:lime';
//
const menu = document.getElementsByClassName('menu')[0];
const menuLi = menu.getElementsByTagName('li');
const menuLi1a = menuLi[0].getElementsByTagName('a')[0];
const menuLi2a = menuLi[1].getElementsByTagName('a')[0];
const menuLi3a = menuLi[2].getElementsByTagName('a')[0];
const menuLi4a = menuLi[3].getElementsByTagName('a')[0];
const menuAllA = menu.getElementsByTagName('a');
console.log(menu);
console.log(menuLi);
console.log(menuLi1a);
console.log(menuAllA);
menuLi[0].style = 'background-color:yellow';
menuAllA[1].style = 'border:2px solid #000';
menuLi4a.style = 'background-color:lightgreen';
//
const notice = document.getElementById('notice');
console.log(notice);
notice.style = 'color:red';
//
const container = document.getElementById('container');
const title = document.getElementById('title');
const titleA = title.getElementsByTagName('a');
const contents = document.getElementById('contents');
const contentsA = contents.getElementsByTagName('a');
console.log(container);
console.log(title);
console.log(contents);
console.log(titleA);
console.log(contentsA);
container.style = 'background-color:lightcoral';
title.style = 'border:1px solid red';
titleA[0].style = 'border:3px solid brown';
contents.style = 'border:1px solid blue';
contentsA[1].style = 'border:3px solid purple'
console.log('===============================');
const nav = document.getElementsByTagName('nav')[0];
const gnb = nav.getElementsByClassName('gnb')[0];
const gnbLi =  gnb.getElementsByTagName('li');
const lnb = gnb.getElementsByClassName('lnb')[0];
const lnbLi = lnb.getElementsByTagName('li');
const lnbLiA = lnb.getElementsByTagName('a');
console.log(gnbLi);
console.log(lnbLi);
console.log(lnbLiA);
nav.style = 'background-color:lime';
gnb.style = 'border:2px dashed green';
lnbLiA[1].style = 'text-decoration:line-through'