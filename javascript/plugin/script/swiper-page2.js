const eventTotal = document.querySelector('.total')
const eventcurrent = document.querySelector('.current')
const eventSlide = document.querySelectorAll('.event-swiper .swiper-slide')
console.log(eventTotal, eventSlide, eventcurrent);

eventTotal.textContent = eventSlide.length;

const eventSwiper = new Swiper('.event-swiper',{
  autoplay:{delay:2500,},
  loop:true,
  on:{
    slideChange:function(){
      eventcurrent.textContent = this.realIndex+1;
    }
  },
});
