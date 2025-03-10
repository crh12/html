const mainSlideCurrent = document.querySelector('.main_bnr .swiper_current');
const mainSlideTotal = document.querySelector('.main_bnr .swiper_total');


mainSlideTotal.textContent = `0${document.querySelectorAll('.main_bnr .swiper-slide').length}`;

const mainSwiper = new Swiper('.main_swiper',{
    // autoplay:{delay:2500,},
    loop:true,
    spaceBetween:50,
    centeredSlides:true,
    navigation:{
        nextEl:'.main_bnr .next',
        prevEl:'.main_bnr .prev',
    },
    on:{
        slideChange:function(){
        mainSlideCurrent.textContent = `0${this.realIndex+1}`;
        }
    },
    scrollbar: {
        el: '.main_bnr .swiper-scrollbar',
    },
});

const roomSwiper = new Swiper('.room_swiper',{
    loop:true,
    spaceBetween:30,
    // navigation:{
    //     nextEl:'.main_bnr .next',
    //     prevEl:'.main_bnr .prev',
    // },
});
