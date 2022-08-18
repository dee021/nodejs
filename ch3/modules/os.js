const os = require('os'); // 사용자 컴퓨터의 운영체제 정보

console.log('OS 정보-----------------------------');
console.log('os.arch():', os.arch());
console.log('os.platform():', os.platform());
console.log('os.type():', os.type());
console.log('os.uptime():', os.uptime());
console.log('os.hostname():', os.hostname());
console.log('os.release():', os.release());

/*
OS 정보-----------------------------
os.arch(): x64                                   // 프로세서 아키텍처 정보. process.arch와 동일
os.platform(): linux                             // 운영체제 플랫폼 정보. process.platform과 동일
os.type(): Linux                                 // 운영체제의 종류
os.uptime(): 5978.2                              // 운영체제 부팅 이후 흐른 시간(초)
os.hostname(): DESKTOP-M24GGRC                   // 컴퓨터의 이름
os.release(): 5.10.102.1-microsoft-standard-WSL2 // 운영체제의 버전
*/


console.log('경로-----------------------------');
console.log('os.homedir():', os.homedir());
console.log('os.tmpdir():', os.tmpdir());

/* 
경로-----------------------------
os.homedir(): /home/dee     // 홈 디렉터리 경로
os.tmpdir(): /tmp           // 임시 파일 저장 경로
*/

console.log('CPU 정보-----------------------------');
console.log('os.cpus():', os.cpus());
console.log('os.cpus().length:', os.cpus().length);

/* 
CPU 정보-----------------------------
os.cpus(): [                                            // 컴퓨터의 코어 정보
  {
    model: 'Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz',
    speed: 1991,
    times: { user: 20550, nice: 0, sys: 9310, idle: 5939370, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz',
    speed: 1991,
    times: { user: 23020, nice: 0, sys: 5920, idle: 5947050, irq: 0 }
  },
  ...,
  {
    model: 'Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz',
    speed: 1991,
    times: { user: 22600, nice: 0, sys: 4130, idle: 5949860, irq: 0 }
  }
]
os.cpus().length: 8                     // 코어 개수
*/

console.log('Mem 정보-----------------------------');
console.log('os.freemem():', os.freemem());
console.log('os.totalmem():', os.totalmem());

/*
Mem 정보-----------------------------
os.freemem(): 11904040960           // 사용 가능한 메모리(RAM) 
os.totalmem(): 13255094272          // 전체 메모리 용량
*/

// +) os.constants : 각종 에러와 신호에 대한 정보가 담겨 있음
