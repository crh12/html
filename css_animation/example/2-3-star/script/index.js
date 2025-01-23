const category = document.querySelectorAll('.category_menu a')
const menu = document.querySelectorAll('.menu_contents .menu');
const menuTitle = document.querySelector('#menu_title');

// =========================================== 초기세팅 / 메뉴 숨기기
for(let i of menu){
  hideMenu();
  menu[0].style.display = 'flex';
}

// =========================================== 함수
function activeRemove(){
  for(let i of category){
    i.classList.remove('active');
  }
};
function hideMenu(){
  for(let i of menu){
    i.style.display = 'none';
  }
}

for(let i of category){
  i.addEventListener('click',()=>{
    activeRemove();
    i.classList.add('active');
  })
}