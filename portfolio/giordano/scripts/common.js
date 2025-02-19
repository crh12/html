// ------------------------------------------------------------ 변수
const gnb = document.querySelectorAll('.gnb > li > a');
const lnb = document.querySelectorAll('.gnb > li .lnb');

// ------------------------------------------------------------ 함수

function lnbReset(){
    for(let i of lnb) i.style.display = 'none';
};

// ------------------------------------------------------------ 헤더
// lnbReset();

for(let i of lnb){
    i.parentElement.addEventListener('mouseenter',()=>{
        // lnbReset();
        i.style.display = 'flex';
        setTimeout(()=>{i.style.opacity = '1'}, 1);
        // setTimeout(()=>{lnb[index].style.transition = 'opacity 0.3s'}, 1);
        // setTimeout(()=>{i.style.display = 'flex'}, 0);
    });
};

// gnb.forEach((target, index)=>{
//     target.addEventListener('mouseover',()=>{
//         lnbReset();
//         setTimeout(()=>{lnb[index].style.display = 'flex'}, 0);
//         setTimeout(()=>{lnb[index].style.opacity = '1'}, 1);
//         // setTimeout(()=>{lnb[index].style.transition = 'opacity 0.3s'}, 1);
//         // setTimeout(()=>{lnb[index].style.opacity = '1'}, 300);
//         // lnb[index].style.display = 'flex';
//     });
// });


for(let i of lnb){
    i.addEventListener('mouseleave',()=>{
        lnbReset();
    });
};