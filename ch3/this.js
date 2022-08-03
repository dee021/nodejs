console.log(this); // {}
console.log(this === module.exports); // true
console.log(this === exports); // true
/*
Node에서 실행되는 js 파일은 전체 script가 하나의 함수 안에 들어가 지역 스코프를 가짐
*/

function whatIsThis() {
    console.log('function', this === exports, this === global);
}
whatIsThis(); // function false true
/*
일반 함수로 실행되는 함수 내부에서 참조하는 this는 전역객체
*/

what = () => {
    console.log(this === exports, this === global);
};
what(); // ture false
/*
익명 함수(화살표 함수)의 this는 상위 스코프의 this를 사용
*/