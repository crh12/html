








// ------------------------------------------------------------ main bnr
const mainSwiper = new Swiper('.main_swiper',{
    // autoplay:{delay:2500,},
    loop:true,
    slidesPerView:3,
    navigation:{
    nextEl:'.main_swiper .swiper-button-next',
    prevEl:'.main_swiper .swiper-button-prev',
    },
    pagination: {
    el: '.main_bnr .swiper-pagination',
    type: 'bullets',
    clickable: true,
    },
});

const newSwiper = new Swiper('.new_swiper',{
    loop:true,
    slidesPerView:3.25,
    spaceBetween:20,
    pagination: {
    el: '.new_swiper .swiper-pagination',
    type: 'progressbar',
    },
});

const bestSwiper = new Swiper('.best_swiper',{
    loop:true,
    slidesPerView:3.25,
    spaceBetween:20,
    pagination: {
    el: '.best_swiper .swiper-pagination',
    type: 'progressbar',
    },
});