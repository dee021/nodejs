// 명령 프롬프트의 명령어 dir(또는 ls)을 노드를 통해 수행
const exec = require('child_process').exec;
// const process = exec('dir');
const process = exec('ls');
/* 
child_process : 노드에서 다른 프로그램을 실행하거나 명령어를 수행하고 싶을 때 사용하는 모듈
현재 노드 프로세스 외 새로운 프로세스를 띄워 명령어를 수행
결과는 표준 출력(stdout)과 표준 에러(stderr)에 붙여둔 data 이벤트 리스터에 버퍼 형태로 전달됨
*/

process.stdout.on('data', function(data) {
    console.log(data.toString()); // 실행 결과
});

process.stderr.on('data', function(data) {
    console.error(data.toString()); // 실행 에러
});

/* 출력 
URL        hash.js  pbkdf2.js        querystring.js   util.js
cipher.js  os.js    prime-worker.js  searchParams.js  worker_data.js
exec.js    path.js  prime.js         url.js           worker_threads.js
*/