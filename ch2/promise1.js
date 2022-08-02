const condition = true;
const promise = new Promise((resolve, reject) => { // promise 객체 생성
  if (condition) {
    resolve('성공');
  }
  else {
    reject('실패');
  }
});

// 다른 코드

promise
.then((message) => {
  console.log(message); // 성공(resolve)한 경우 실행
})
.catch((error) => {
  console.error(error); // 실패(reject)한 경우 실행
})
.finally(() => { // 끝나고 무조건 실행
  console.log('무조건');
});

// new Promise는 바로 실행, 결괏값은 then을 붙였을 때 받음
/* 출력
성공
무조건
*/