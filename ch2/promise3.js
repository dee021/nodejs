const promise1 = Promise.resolve('성공1'); // 즉시 resolve하는 프로미스 생성
const promise2 = Promise.resolve('성공2');
Promise.all([promise1, promise2]) // 모두 resolve될 때까지 기다렸다가 then
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
});
// 다수의 비동기 처리를 병렬로 가능

/*출력
[ '성공1', '성공2' ]
*/