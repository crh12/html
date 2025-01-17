const birthday_flower = [
{
month:1,
flower:'수선화',
content:'자기애, 자존심, 외로움',
},{
month:2,
flower:'제비꽃',
content:'겸손, 양보',
},{
month:3,
flower:'수선화',
content:'자기애, 자존심, 외로움',
},{
month:4,
flower:'스위트피',
content:'추억, 즐거움'
},{
month:5,
flower:'은방울꽃',
content:'희망, 섬세함'
},{
month:6,
flower:'백합',
content:'순결'
},{
month:7,
flower:'미나리아재비',
content:'아름다움, 인격'
},{
month:8,
flower:'글라디올러스',
content:'비밀, 상상, 견고함'
},{
month:9,
flower:'물망초',
content:'진실한 사랑'
},{
month:10,
flower:'금잔화',
content:'실망, 비애'
},{
month:11,
flower:'국화',
content:'성실, 진실'
},{
month:12,
flower:'포인세티아',
content:'축하, 감사'
}]

const bgImg = document.querySelector('.wrap');
const birthYear = document.querySelector('#birth_year');
const birthMonth = document.querySelector('#birth_month');
const birthDate = document.querySelector('#birth_date');
const resultBtn = document.querySelector('#resultBtn');
const errorMsg = document.querySelector('.error_message');
const userResult = document.querySelectorAll('.result span');

userResult[0].parentElement.style.display = 'none';
console.log(bgImg.style.backgroundImage = 'url()');
bgImg.style.backgroundImage = 'url(../images/bg.jpg)';

function resultFunc(num){
    errorMsg.textContent = '';
    userResult[0].parentElement.style.display = 'block';
    userResult[0].textContent = birthday_flower[num-1].month;
    userResult[1].textContent = birthday_flower[num-1].flower;
    userResult[2].textContent = birthday_flower[num-1].content;
}

resultBtn.addEventListener('click',()=>{
    userResult[0].parentElement.style.display = 'none';
    if (birthYear.value === "") errorMsg.textContent = '출생년도를 입력해주세요'
    else if (birthMonth.value === "") errorMsg.textContent = '출생월을 입력해주세요'
    else if (birthMonth.value < 0, birthMonth.value > 12) errorMsg.textContent = '출생월을 다시 확인해주세요'
    else if (birthDate.value === "") errorMsg.textContent = '출생일을 입력해주세요'
    else if (birthDate.value < 0, birthDate.value > 31) errorMsg.textContent = '출생일을 다시 확인해주세요';
    else if (birthMonth.value > 0, birthMonth.value <= 12) resultFunc(birthMonth.value);
    else errorMsg.textContent = '입력하신 출생년월일을 다시 확인해주세요';
})
