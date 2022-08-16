// process : 현재 실행되고 있는 노트 프로세스에 대한 정보를 갖고있는 객체

console.log('process.version:', process.version);
console.log('process.arch:', process.arch);
console.log('process.platform:', process.platform);
console.log('process.pid:', process.pid);
console.log('process.uptime():', process.uptime());
console.log('process.execPath:', process.execPath);
console.log('process.cwd():', process.cwd());
console.log('process.cpuUsage():', process.cpuUsage());

/* 출력
process.version: v16.15.1 // 설치된 노드의 버전
process.arch: x64 // 프로세서 아키텍처 정보
process.platform: linux // 운영체제 플랫폼 정보
process.pid: 1877 // 현재 프로세스의 아이디
process.uptime(): 0.0499283 // 프로세스가 시작된 후 흐른 시간 (단위: 초)
process.execPath: /home/dee/.nvm/versions/node/v16.15.1/bin/node // 노드의 경로
process.cwd(): /home/dee/test/nodejs/ch3/modules // 현재 프로세스가 실행되는 위치
process.cpuUsage(): { user: 44562, system: 11140 } // 현재 cpu 사용량
 */

console.log('process.env:', process.env); // 시스템 환경 변수 출력

console.log();
console.log();