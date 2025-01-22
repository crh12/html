const menu1 = document.querySelector('.menu1');
const menu2 = document.querySelector('.menu2');
const menu3 = document.querySelector('.menu3');
const menuTitle = document.querySelector('#menu_title');

// =========================================== 초기세팅
menu2.style.display = 'none';
menu3.style.display = 'none';

function hideMenu(){
  menu1.classList.remove('active');
  menu2.classList.remove('active');
  menu3.classList.remove('active');
};
