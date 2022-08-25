// 기타 fs 메서드 : 노드 8.5 버전 이후부터 pipe하지 않고 파일 복사 가능
const fs = require('fs').promises;

fs.copyFile('readme4.txt', 'writeme4.txt')
.then(() => console.log('복사 완료'))
.catch((error) => console.error(error));

/* 실행 결과
$ ls | grep writeme
writeme.txt
writeme2.txt

$ node copyFile
복사 완료

$ ls | grep writeme
writeme.txt
writeme2.txt
writeme4.txt
*/