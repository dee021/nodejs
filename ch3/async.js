const fs = require('fs');

console.log('시작')
fs.readFile('./readme2.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('1번', data.toString());
});
fs.readFile('./readme2.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('2번', data.toString());
});
fs.readFile('./readme2.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('3번', data.toString());
});
console.log('끝');

/* 출력
시작
끝
1번 저를 여러 번 읽어보세요.
3번 저를 여러 번 읽어보세요.
2번 저를 여러 번 읽어보세요.
*/

/* 
실행할 때마다 '시작'과 '끝'을 제외하고 다른 결과가 나옴 <= 비동기 방식
*/