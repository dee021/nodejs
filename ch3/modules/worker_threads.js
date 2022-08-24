// 멀티 스레드 방식 작업
const {
    Worker, isMainThread, parentPort,
} = require('worker_threads');

if (isMainThread) { // 부모일 때
    const worker = new Worker(__filename); // 지정 파일을 워커 스레드에서 실행
    worker.on('message', message => console.log('from worker', message)); // 'message' 이벤트 등록
    // +) once.on() : 한 번만 e 실행
    worker.on('exit', () => console.log('worker exit')); // 'exit' 이벤트 등록
    worker.postMessage('ping'); // 워커에 데이터 전송
} else { // 워커일 때(line7에서 생성된 워커 스레드가 실행)
    parentPort.on('message', (value) => { // 'message' 이벤트 등록
        console.log('from parent', value);
        parentPort.postMessage('pong'); // 부모에 데이터 전송
        parentPort.close(); 
    });
}

/* 출력
from parent ping
from worker pong
worker exit
*/