// ------------------------------------------------------------ 변수
const menuLi = document.querySelectorAll('.title_menu_container .menu > li > a'); /* 메뉴 - 대분류 */
const subMenu = document.querySelectorAll('.title_menu_container .sub_menu'); /* 각 메뉴 */
const subLi = document.querySelectorAll('.title_menu_container .sub_menu a'); /* 메뉴 - 소분류 */
const alignList = document.querySelectorAll('.align_list a'); /* 정렬방식 */
const filter = document.querySelector('.align_contents .filter'); /* 필터 */
const layoutList = document.querySelectorAll('.align_contents .layout a'); /* 레이아웃 방식 */
const pageList = document.querySelectorAll('.page_container .page_num');
const pagePrev = document.querySelector('.page_container .page_prev');
const pageNext = document.querySelector('.page_container .page_next');
const like = document.querySelectorAll('main .like img');
let fillterBlean = false;
let boolean = false;

// ------------------------------------------------------------ 함수 생성
function menuReset(){
    for(let i of menuLi){i.classList.remove('active')}
};

function subReset(){
    for(let i of subLi){i.classList.remove('active')}
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

function subHide(){
    for(let i of subMenu){
        i.style.display = 'none';
    };
};

// ------------------------------------------------------------ 초기세팅

subHide();

// ------------------------------------------------------------ 메뉴
for(let i of menuLi){
    i.addEventListener('click', (e)=>{
        e.preventDefault();
        menuReset();
        subReset();
        subHide();
        i.classList.add('active');
        i.nextElementSibling.style.display = 'block';
    })
};

for(let i of subLi){
    i.addEventListener('click', (e)=>{
        e.preventDefault();
        menuReset();
        subReset();
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

filter.addEventListener('click', (e)=>{
    e.preventDefault();
    fillterBlean = !fillterBlean;
    if(fillterBlean) filter.style.backgroundImage = 'url(./images/filter_15_on.png)';
    else filter.style.backgroundImage = 'url(./images/filter_15.png)';
});

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
