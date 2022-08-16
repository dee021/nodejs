setImmediate(() => {
    console.log('immediate');
});

process.nextTick(()=>{
    console.log('nextTick');
});

setTimeout(()=> {
    console.log('timeout');
}, 0);

Promise.resolve().then(() => console.log('promise'));

/* 출력
nextTick
promise
timeout
immediate
*/
// process.nextTick로 받은 콜백 함수나 resolve된 Promise는 다른 이벤트 루프에서 대기하는 콜백 함수보다 먼저 실행