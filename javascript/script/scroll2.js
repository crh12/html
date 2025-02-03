const card = document.querySelectorAll('.card')
console.log(card)

window.addEventListener('scroll',function(){
  
  // console.log(card[0].getBoundingClientRect().top)
  function animateCard(i, start, end){
    // i 각 카드 인덱스 정보 매개변수
    // start 각 카드 시작 위치 매개변수 (평균 +500이상)
    // end 각 카드 종류 위치 매개변수 (평균 시작기준 +1000이상)
    // 메모리낭비를 막기 위해 특정영역에서만 사용가능하도록 조건문생성
    if(window.scrollY >= start && window.scrollY <= end){
      console.log(true)
      // 진행율식 : (scrollY - DOM시작좌표) / (DOM종료좌표 - DOM시작좌표)
      // opacity(1), scale(1)
      // opacity 1 - 진행율; // 1 - 0.5 = 0.5(반투명)
      // scale 1 - 0.1*진행율; // 1 - 0.1*0.5 = 0.95(약간 축소)
      let progress = (scrollY - start) / (end - start);
      let aniOpacity = 1 - progress;
      let aniScale = 1 - 0.1 * progress;
      card[i].style.opacity = aniOpacity;
      card[i].style.transform = `scale(${aniScale})`;
    }
  } // animateCard end

animateCard(0, card[0].getBoundingClientRect().top+500, card[0].getBoundingClientRect().top+1500)
animateCard(1, card[1].getBoundingClientRect().top+1000, card[1].getBoundingClientRect().top+2000)
animateCard(2, card[2].getBoundingClientRect().top+1500, card[2].getBoundingClientRect().top+2500)

}) // scroll end