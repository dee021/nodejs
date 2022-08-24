// .py를 실행하는 프로그램
const spawn = require('child_process').spawn;
const process = spawn('python', ['test.py']);
/* 
exec : 셸을 실행하여 명령어를 수행
spawn : 새로운 프로세스를 띄워 명령어를 실행
- spawn(명령어, args=[], {shell: true}]) : 셸을 실행해서 명령어 수행
- 스트림 리턴
*/
process.stdout.on('data', function(data) {
    console.log(data.toString());
});
process.stderr.on('data', function(data) {
    console.error(data.toString());
});

/* 출력
hello python
*/