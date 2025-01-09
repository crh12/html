// 계산식) 적정 체중 = (본인신장-100)*0.9
const userHeight = document.querySelector('#userHeight');
const userWeight = document.querySelector('#userWeight');
const resultBtn = document.querySelector('#resultBtn');
const wNormal = document.querySelector('.wNormal');
const wOver = document.querySelector('.wOver');

function wCalc(cm, kg){
  wNormal.innerHTML = (cm - 100) * 0.9;
  wOver.innerHTML = kg - wNormal.innerHTML;
};

resultBtn.addEventListener('click',function(){wCalc(userHeight.value,userWeight.value)})