// ------------------------------------------------------------ 변수
const menuList = document.querySelectorAll('.title_menu_container .menu a');
const alignList = document.querySelectorAll('.align_list a');
const layoutList = document.querySelectorAll('.align_contents .layout a');
const pageList = document.querySelectorAll('.page_container .page_num');
const pagePrev = document.querySelector('.page_container .page_prev');
const pageNext = document.querySelector('.page_container .page_next');
const pageNow = document.getElementsByClassName('.page_num.active');/* ★★ */
const like = document.querySelectorAll('main .like img')
let boolean = false;

console.log(pageNow);

// ------------------------------------------------------------ 초기세팅

// ------------------------------------------------------------ 함수 생성
function menuReset(){
    for(let i of menuList){i.classList.remove('active')}
};

function alignReset(){
    for(let i of alignList){i.classList.remove('active')}
};

function layoutReset(){
    for(let i of layoutList){i.classList.remove('active')}
};

function pageReset(){
    for(let i of pageList){i.classList.remove('active')}
};

function pageNextBtn(pageNow){ /* ★★ */
    pageReset();
    pageList[pageNow++].classList.add('active');
};


// ------------------------------------------------------------ 메뉴
for(let i of menuList){
    i.addEventListener('click', ()=>{
        menuReset();
        i.classList.add('active');
    })
};

// ------------------------------------------------------------ 리스트 필터

for(let i of alignList){
    i.addEventListener('click', (e)=>{
        e.preventDefault();
        alignReset();
        i.classList.add('active');
    })
};

layoutList[0].addEventListener('click', ()=>{
    if (layoutList[0].className != 'active') {
        layoutReset();
        layoutList[0].classList.add('active');
        layoutList[0].style.backgroundImage = 'url(./images/layout_01_on.png)';
        layoutList[1].style.backgroundImage = `url(./images/layout_02.png)`;
    }
});
layoutList[1].addEventListener('click', ()=>{
    if (layoutList[1].className != 'active') {
        layoutReset();
        layoutList[1].classList.add('active');
        layoutList[1].style.backgroundImage = 'url(./images/layout_02_on.png)';
        layoutList[0].style.backgroundImage = `url(./images/layout_01.png)`;
    }
});

// ------------------------------------------------------------ 위시리스트 ★
for(let i of like){
    i.addEventListener('click',(e)=>{
        e.preventDefault();
        boolean = !boolean;
        if(boolean) i.src = './images/like_on_16.png';
        else i.src = './images/like_16.png';
    });
};


// ------------------------------------------------------------ 페이지 번호

for(let i of pageList){
    i.addEventListener('click', (e)=>{
        e.preventDefault();
        pageReset();
        i.classList.add('active');
    })
};

// pageNext.addEventListener('click', (e)=>{
//     e.preventDefault();
//     if (pageNow < 4) pageNextBtn(pageNow);
// });