const fs = require('fs');

const readStream = fs.createReadStream('readme4.txt')
const writeStream = fs.createWriteStream('readme3.txt');
readStream.pipe(writeStream);

/* 실행
$ cat readme3.txt
저는 조금씩 나눠서 전달됩니다. 나눠진 조각을 chunk라고 부릅니다.
$ node pipe
$ cat readme3.txt
저를 writeme3.txt로 보내주세요.
*/

/* 
pipe()
- It takes the source, and pipes it into a destination.
- piping : 스트림끼리 연결하는 것
ex1)
src.pipe(dest1);
dest1.pipe(dest2);
ex2)
src.pipe(dest1).pipe(dest2);
ex1과 ex2는 같은 동작
*/