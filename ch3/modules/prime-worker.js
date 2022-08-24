// 폐구간 [2, 10000001]에서 소수의 개수를 멀티 스레딩으로 구하는 프로그램

const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const min = 2;
const primes = [];

function findPrimes(start, range) {
    let isPrime = true;
    let end = start + range;
    for (let i = start; i < end; i++) {
        for (let j = min; j < Math.sqrt(end); j++) {
            if (i !== j && i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
        isPrime = true;
    }
}

if (isMainThread) {
    const max = 10000000;
    const threadCount = 8;
    const threads = new Set();
    const range = Math.ceil((max - min) / threadCount);
    let start = min;
    console.time('prime');
    // 8개의 스레드 생성
    for (let i = 0; i < threadCount - 1; i++) {
        const wStart = start;
        threads.add(new Worker(__filename, { workerData: {start: wStart, range } }));
        start += range;
    }
    threads.add(new Worker(__filename, { workerData: {start, range: range + ((max - min + 1) % threadCount) } }));
    for (let worker of threads) {
        worker.on('error', (err) => {
            throw err;
        });
        worker.on('exit', () => {
            threads.delete(worker);
            if (threads.size === 0) {
                console.timeEnd('prime');
                console.log(primes.length);
            }
        });
        worker.on('message', (msg) => {
            // primes = primes.concat(msg); // override 에러로 spread operator(...)로 push 
            primes.push(...msg);
        });
    }
} else {
    findPrimes(workerData.start, workerData.range);
    parentPort.postMessage(primes);
}

/* 출력
prime: 2.369s   // prime.js보다 속도 개선(9.046s)
664579
*/

/* 
n개의 스레드를 사용한다고 속도가 n배 빨라지는 것은 아니며,
스레드 생성 및 스레드간 통신에서 상당한 비용이 발생함을 고려해야 함
*/