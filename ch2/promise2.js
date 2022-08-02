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

// 프로미스 return -> 프로미스 수행 후 다음 then/catch 호출
promise
.then((message) => {
  return new Promise((resolve, reject) => {
    resolve(message);
  });
})
.then((message2) => {
  console.log(message2);
  return new Promise((resolve, reject) => {
    resolve(message2);
  });
})
.then((message3) => {
  console.log(message3);
})
.catch((error) => {
  console.error(error); // 실패(reject)한 경우 실행
});

/* 출력
성공
성공
*/