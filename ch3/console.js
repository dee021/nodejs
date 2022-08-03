const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside: {
        inside: {
            key: 'value',
        },
    },
};

console.time('전체 시간');
// console.time(label) : console.timeEnd(label)과 대응되어 같은 label을 가진 time과 timeEnd 사이의 시간을 측정
console.log('로그');
console.log(string, number, boolean);
console.error('에러 메시지');

console.table([{name: 'zero', birth: 1994}, {name: 'hero', birth: 1988}]);
/*
┌─────────┬────────┬───────┐
│ (index) │  name  │ birth │
├─────────┼────────┼───────┤
│    0    │ 'zero' │ 1994  │
│    1    │ 'hero' │ 1988  │
└─────────┴────────┴───────┘

테이블 형식으로 배열 표현
배열의 요소로 객체 리터럴을 넣으면 객체의 속성들을 테이블로 표현
*/
console.dir(obj, {colors: false, depth:2}); // { outside: { inside: { key: 'value' } } }
console.dir(obj, {colors: true, depth: 1}); // { outside: { inside: [Object] } }
/*
console.dir(객체, 옵션) : 객체를 콘솔에 표시
- colors : 색 추가 여부
- depth : 표시할 객체 단계(default = 2)
*/
console.time('시간 측정');
for (let i = 0; i < 100000; i++) {}
console.timeEnd('시간 측정'); // 시간 측정: 2.527ms

function b() {
    console.trace('에러 위치 추적');
    // 에러의 발생 위치를 추적할 수 있게 함
}

function a() {
    b();
}
a();

console.timeEnd('전체 시간');