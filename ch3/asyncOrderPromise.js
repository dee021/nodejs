// 프로미스 방식을 이용하여 ./asyncOrder.js의 콜백 지옥 탈출
const fs = require('fs').promises;

console.log('시작');
fs.readFile('./readme2.txt')
.then((data) => {
    console.log('1번', data.toString());
    return fs.readFile('./readme2.txt');
})
.then((data) => {
    console.log('2번', data.toString());
    return fs.readFile('./readme2.txt');
})
.then((data) => {
    console.log('3번', data.toString());
    console.log('끝');
})
.catch((err) => {
    console.error(err);
});

/* 출력
시작
1번 저를 여러 번 읽어보세요.
2번 저를 여러 번 읽어보세요.
3번 저를 여러 번 읽어보세요.
끝
*/