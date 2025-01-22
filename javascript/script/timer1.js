// 타이머함수
// 일정시간마다 반복하는 setInterval
// setInterval(실행함수, 실행시간)
// const 타이머변수 = setInterval(실행함수, 실행시간)
let num = 5;
const timerDiv = document.querySelector('.timer');
const timer1 = setInterval(function(){
  // console.log('timer'+num)
  timerDiv.textContent = num;
  num--;
  // if(num === 0) window.location.href = './index.html';
}, 1000);

console.log('==========================')
// 애니메이션 진행시간에 맞춰 1초씩 증가하는 타이머
const boxAni = document.querySelector('.box');
const boxTimer = document.querySelector('.box_timer');
let uptime = 0;
let timer2 = setInterval(timerFunc, 1000)
function timerFunc(){
  uptime++;
  boxTimer.innerText = `진행시간 : ${uptime}초`
}

// stop 버튼 클릭 시 진행시간, 애니메이션이 모두 정지 (paused)
const stopBtn = document.querySelector('#stop');
// replay 버튼 클릭 시 진행시간, 애니메이션 다시 재생 (running)
const replayBtn = document.querySelector('#replay');
stopBtn.addEventListener('click',()=>{
  clearInterval(timer2);
  // boxAni.style.animation = 'none';
  boxAni.style.animationPlayState = 'paused';
})
replayBtn.addEventListener('click',()=>{
  boxAni.style.animationPlayState = 'running';
  timer2 = setInterval(timerFunc, 1000);
})

// 한 글자씩 작성하는 자바스크립트
const text = 'Portfolio 2025';
let i = 0; // 글자 인덱스 인식변수
const textSpan = document.querySelector('.container .text');
const timer3 = setInterval(writer, 200)
function writer(){
  if(i < text.length){
    textSpan.innerHTML += text.charAt(i);
    console.log(i, text.charAt(i));
    i++;
  }
}
writer() // 함수호출

const text2 = 'Portfolio 2025';
let j = 0;
const textSpan2 = document.querySelector('.container2 .text');
const timer4 = setInterval(writer2, 200);
function writer2(){
  if(j < text2.length){
    textSpan2.innerHTML += text2.charAt(j);
    if(j === 9) textSpan2.innerHTML += '<br>'
    j++;
  }
}
writer2();