const util = require('util'); // 각종 편의 기능을 모아둔 모듈
const crypto = require('crypto');

const dontUseMe = util.deprecate((x, y) => {
    console.log(x + y);
}, 'dontUseMe 함수는 deprecated되었으니 더 이상 사용 금지');
dontUseMe(1, 2);
/* 
util.deprecate(함수, msg) : 함수가 deprecated 치리됨을 알림
- deprecate : 중요도가 떨어져 더 이상 사용되지 않고 앞으로 사라지게 될 것이라는 뜻
*/

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
.then((buf) => {
    console.log(buf.toString('base64'));
})
.catch((error) => {
    console.error(error);
});
/* 
util.promisify() : 콜백 패턴을 프로미스 패턴으로 바꿈
- async/await 패턴까지 사용 가능함
- util.callbackify() : 프로미스 패턴을 콜백 패턴으로 바꿈
*/

/* 출력
3
(node:2316) DeprecationWarning: dontUseMe 함수는 deprecated되었으니 더 이상 사용 금지
(Use `node --trace-deprecation ...` to show where the warning was created)
SXgGoKUA/nHuTcZCR+b+zXNowdR6P3fJcO7Rfl/xXFTIwW1nd9Cpz2dIcxJC85xS0d/AgwdM1lihmuZdAtnMsg==
*/