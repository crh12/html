const mainSlideCurrent = document.querySelector('.main_bnr .swiper_current');
const mainSlideTotal = document.querySelector('.main_bnr .swiper_total');

const mainSwiper = new Swiper('.main_swiper',{
    autoplay:{delay:2500,},
    loop:true,
    spaceBetween:50,
    slidesPerView:1.1,
    centeredSlides:true,
    navigation:{
        nextEl:'.main_bnr .next',
        prevEl:'.main_bnr .prev',
    },
    on:{
        slideChange:function(){
        mainSlideCurrent.textContent = this.realIndex+1;
        }
    },
    pagination: {
        el: '.main_bnr .swiper-pagination',
        type: 'progressbar',
    },
});