/* 스크롤을 감지하는 이벤트 scroll, wheel(마우스휠 동작) */
/* 스크롤 이벤트 적용 객체는 가능한 window 사용한다! */
const topDiv = document.querySelector('.top')
window.addEventListener('scroll', function(){
  // console.log('scroll')
  console.log(box[2].offsetTop)
  console.log(box[2].getBoundingClientRect().y)
  if(this.window.scrollY > box[1].offsetTop-500) {
    // console.log(true)
    topDiv.style.bottom = '50px';
  } else topDiv.style.bottom = '-70px';
})

const circle = document.querySelector('.circle')
window.addEventListener('mousemove', function(e){
  // console.log(e)
  circle.style.left = `${e.clientX-25}px`
  circle.style.top = `${e.clientY-25}px`
})

// 위로 클릭 시 스크롤 이동시키기
const box = document.querySelectorAll('.box')
topDiv.addEventListener('click', ()=>{
  window.scrollTo({left:0, top:box[1].offsetTop})
  // window.scrollTo(0,0)
  // window.scrollTo({left:0, top:0, behavior:'smooth'})
})