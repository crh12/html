// ------------------------------------------------------------ 변수
const gnb = document.querySelectorAll('.gnb > li > a');
const lnb = document.querySelectorAll('.gnb > li > .lnb');

// ------------------------------------------------------------ 함수

function lnbReset(){
    for(let i of lnb) i.style.display = 'none';
    // for(let i of lnb) i.fadeOut(300);
};

// ------------------------------------------------------------ 헤더
gnb.forEach((target, index)=>{
    target.addEventListener('mouseover',()=>{
        lnbReset();
        lnb[index].style.display = 'flex';
    });
});

for(let i of lnb){
    i.addEventListener('mouseleave',()=>{
        lnbReset();
    });
};