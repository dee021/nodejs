// workerData 속성으로 데이터 전송
const {
    Worker, isMainThread, parentPort, workerData,
} = require('worker_threads');

if (isMainThread) {
    const threads = new Set();
    threads.add(new Worker(__filename, {
        workerData: { start: 1 },
    }));
    threads.add(new Worker(__filename, {
        workerData: { start: 2 },
    }));
    for (let worker of threads) {
        worker.on('message', message => console.log('from worker', message));
        worker.on('exit', () => {
            threads.delete(worker);
            if (threads.size === 0) {
                console.log('job done');
            }
        });
    }
} else { // 각 워커 스레드에서 실행
    const data = workerData;
    parentPort.postMessage(data.start + 100); // 데이터 전송 후 워커 종료
}

/* 출력
from worker 101
from worker 102
job done
*/