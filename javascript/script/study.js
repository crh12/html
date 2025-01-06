// 변수와 html 요소 활용
// 1. 밥 주문하기 / 변수와 함수
var bowl; // 그릇 준비
bowl = '쌀밥';
bowl = '콩밥';

// 함수 생성 (버튼 클릭 시 호출 목적)
// function 생성함수명() { 함수실행결과 }
function cookOrder(){
  console.log('주문한', bowl, '나왔습니다.')
}

// 2. 메일 수신 확인 / 변수, 함수, 버튼
// 메일함에는 하나의 메일만 넣을 수 있다
// 새로운 메일이 오면 기존 메일은 폐기된다
var mailBox;
mailBox = 'welcom join';
mailBox = '[603]개인정보 이용내역 안내';
function checkMail(){
  console.log('새로운 메일이 왔습니다 : ', mailBox)
}

// 3. 장바구니 / 변수, 함수, 버튼
// '사과'만 구입할 수 있는 쇼핑몰
// 버튼을 누를 때마다 사과가 1개씩 추가되서 구입된다.
var fruit;
var num;
fruit = '사과';
num = 0;
function oderFruit(){
  num = num + 1;
  console.log(fruit, num,'개 주문하였습니다')
}

// 4. 재고 수량 감소 / 변수, 함수, 버튼
// 바나나 재고는 10개로 사용자가 1개 주문할 때마다 재고가 주문수량만큼 감소한다.
// 버튼 클릭 시 콘솔 출력 메세지 예) 바나나 1개 주문완료. 재고?개 남았습니다.
var fruit2; // 상품
var oder_num; // 주문수량
var stock; // 재고
fruit2 = '바나나';
oder_num = 0;
stock = 10;
function oderFruit2(){
  num = num + 1;
  stock = stock-num;
  console.log(fruit2, num, '개 주문완료 / 재고', stock, '개 남았습니다')
}