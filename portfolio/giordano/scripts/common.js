// ------------------------------------------------------------ 변수
const gnb = document.querySelectorAll('.gnb > li > a');
const lnb = document.querySelectorAll('.gnb > li .lnb');
const mMenu = document.querySelector('.hd_bg .user_nav .m_menu');
const mClose = document.querySelector('.hd_bg .user_nav .m_close');
const mLnb = document.querySelectorAll('.hd_bg .m_gnb .lnb');

// ------------------------------------------------------------ 초기세팅
for(let i of lnb){
    i.style.opacity = '0';
    i.style.transition = 'opacity 0.3s';
};

for(let i of mLnb){
    i.style.height = '0';
    i.style.transition = 'height 0.3s'
};

// ------------------------------------------------------------ 함수

function lnbReset(){
    for(let i of lnb) i.style.left = '-2000px';
};

function mLnbReset(){
    for(let i of mLnb) {i.style.height = '0'}
};

// ------------------------------------------------------------ 헤더

gnb.forEach((target, index)=>{
    target.addEventListener('mouseenter',()=>{
        lnbReset();
        lnb[index].style.left = '0';
        lnb[index].style.opacity = '1';
    lnb[index].addEventListener('mouseleave',()=>{
        lnbReset();
        lnb[index].style.opacity = '0';
        });
    });
});

mMenu.addEventListener('click', (e)=>{
    e.preventDefault();
    mLnb[0].parentElement.parentElement.style.display = 'block';
    mClose.style.display = 'block';
});

mClose.addEventListener('click', (e)=>{
    e.preventDefault();
    mLnb[0].parentElement.parentElement.style.display = 'none';
    mClose.style.display = 'none';
});

for(let i of mLnb){
    i.parentElement.addEventListener('click', (e)=>{
        e.preventDefault();
        mLnbReset();
        i.style.height = 'max-content';
    });
};  

