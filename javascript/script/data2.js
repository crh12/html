// ===================================== 1/3 복습
// 날짜 관련 메서드
// getMonth()
// getDate()
// getFullYear()
//위 날짜 메서드를 실행하기 위한 초기 세팅으로 new Date() 메소드 반드시 선언!!
let now = new Date();
let mon = now.getMonth()+1;
let day = now.getDate();
let ye = now.getFullYear();

console.log(now);
console.log(`${mon}월`);
console.log(`${day}일`);
console.log(ye);
// 오늘은 ?년 ?월 ?일 입니다.
console.log(`오늘은 ${ye}년 ${mon}월 ${day}일 입니다.`)
console.log(`오늘은 ${now.getFullYear()}년 ${now.getMonth()+1}월 ${now.getDate()}일 입니다.`)
// 메소드와 속성을 작성할 때는 반드시 앞에 객체(object)선언이 되어야 한다.
// 객체.메소드();
// 객체.속성;
// ===================================== 배열과 객체
// 배열 이전 형태 기본 변수
let box1 = 10;
let box2 = 20;
const num = 1;
box1 = box2*3;
console.log(box1); // box1의 값은 20이다.
console.log(`box1의 값은 ${box1}이다.`);
// 배열 기본 문법과 활용
let yoil = ['일','월','화','수','목','금','토'];
console.log(yoil);
// 배열의 개별 데이터 인덱스는 0부터 인식한다.
// 배열의 개별 인덱스 호출하는 방법 (개별 호출안하면 무조건 전체출력만 된다.)
console.log(yoil[5]+'요일');
console.log(`내일은 ${yoil[6]}요일 입니다.`); // 내일은 토요일입니다.
// 배열의 전체 개수 length 속성은 1부터 인식한다.
console.log(yoil.length);
// yoil 배열 데이터 개수는 7개 이다.
console.log(`yoil 배열 데이터 개수는 ${yoil.length}개 이다.`)
// 배열 생성과 호출 연습
let colorSet = ['red','green','white','black','blue']
console.log(colorSet[1], colorSet[3], colorSet[2]); // 랜덤하게 3개 고르기
let fruits = ['바나나', '딸기', '사과', '귤', '수박', '오렌지', '복숭아']
// 주문하신 상품은 복숭아, 오렌지, 수박, 귤, 사과, 딸기, 바나나 총 7개 입니다.
console.log(`주문하신 상품은 ${fruits[6]}, ${fruits[5]}, ${fruits[4]}, ${fruits[3]}, ${fruits[2]}, ${fruits[1]}, ${fruits[0]} 총 ${fruits.length}개 입니다.`)
// 배열 추가 매소드 공부
// push(), pop(), shift(), unshift()
// 객체.push() 배열의 끝 위치에 값 추가
// 객체.pop() 배열의 끝 위치에서 값 1개 제거
// 객체.unshift() 배열의 시작 위치에 값 추가
// 객체.shift() 배열의 시작 위치에 값 1개 제거
let numbers = [5,6,7,8];
console.log(numbers.length); // 4
console.log(numbers[3]); // 8
numbers.push(9); // 배열의 끝에 9 숫자데이터 삽입
console.log(numbers); // 5 6 7 8 9
numbers.pop(); // 배열의 끝에 값 1개 제거
console.log(numbers) // 5 6 7 8
numbers.unshift(4); // 배열의 시작에 4 숫자데이터 삽입
console.log(numbers); // 4 5 6 7 8
numbers.shift(); // 배열의 시작 값 1개 제거
console.log(numbers); // 5 6 7 8
numbers.push(9);
numbers.push(10);
console.log(numbers);
numbers.pop();
numbers.pop();
console.log(numbers);
numbers.unshift(4);
numbers.unshift(3);
console.log(numbers);
numbers.shift();
numbers.shift();
console.log(numbers);
// 메가박스 빠른 예매 시트템 이해 
// 1. 인원 선탠 안할 시 좌석은 반 값으로 빈 배열로 시작한다
// 2. 인원 추가에 따라 배열에 좌석값이 들어갈 수 있는 저장소가 추가된다.
// 3, 추가된 인원이 희망좌석을 선택하면 해당 좌석정보가 위 2번 저장소에 대입된다.
let megabox = [];
const megaboxPrice = 10000;
console.log(megabox); // 빈 배열
// 상황 예시 1. 성인 인원 1 추가
megabox.push(''); // 빈 문자열 == ''
console.log(megabox); // 성인 1에 대한 빈 좌석 정보 제공
// 상황 예시 2. 성인 좌석 선택(A5)
megabox[0] = 'A5';
console.log(megabox);
// 상황 예시 3. 성인 인원 1 추가
megabox.push('');
console.log(megabox);
// 상황 예시 4. 추가 성인 F5 좌석 선택
megabox[1] = 'F5';
console.log(megabox);
// 상황 예시 5. 성인 A 예매 취소
// megabox.shift();
console.log(megabox);
// 총 인원은 ?명이고 최종 결제 금액은 ?원입니다.
console.log(`총 인원은 ${megabox.length}명이고 최종 결제 금액은 ${megabox.length * megaboxPrice}원입니다.`)
console.log('=========================')
// 카페 제공 메뉴와 장바구니
const coffeeMenu = ['아메리카노', '카페라떼', '녹차라떼', '돌체라떼', '콜드브루']
const coffeePrice = 5000;
let cart = [];
cart.push(coffeeMenu[0]); // 아메리카노 1잔 구입
// coffeeMenu배열의 0 인덱스 데이터값을 cart배열의 마지막 위치에 push추가한다.
console.log(cart);
cart.push(coffeeMenu[1]); // 카페라떼 1잔 구입
console.log(cart);
cart.push(coffeeMenu[0]); // 아메리카노 1잔 구입
console.log(cart);
cart.push(coffeeMenu[4]); // 콜드브루 1잔 구입
console.log(cart);
cart.pop(); // 콜드브루 취소
console.log(cart);
cart.push(coffeeMenu[3]); // 돌체라떼 1잔 구입
console.log(cart);
// 장바구니 총 ?개
console.log(`장바구니 총 ${cart.length}개`);
// 최종 결제 금액은 ?원입니다.
console.log(`최종 결제 금액은 ${cart.length*coffeePrice}원 입니다.`)
console.log('=========================')
// 배열 작성 문법 연습
let array1 = [1,2,3,4]; // 가장 많이 사용하는 문법
let array2 = new Array(5,6,7,8); // 새로운 배열 생성 뜻으로 작성하는 문법
let array3 = new Array(4); // 값4가 아닌 배열 4자리를 준비한다.
console.log(array1);
console.log(array2);
console.log(array3);
// 배열 주의사항, 호출 시 반드시 인덱스를 사용한다. array1 (X) array1[0] (O)