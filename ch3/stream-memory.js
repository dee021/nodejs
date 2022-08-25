// 용량이 큰 파일을 작은 버퍼 단위로 복사
const fs = require('fs');

console.log('before: ', process.memoryUsage().rss);

const readStream = fs.createReadStream('./big.txt');
const writeStream = fs.createWriteStream('./big3.txt');
readStream.pipe(writeStream);
readStream.on('end', () => {
    console.log('stream: ', process.memoryUsage().rss);
});

/* buffer-memory.js 출력
before:  32079872
buffer:  923328512 // 923 MB
*/
/* stream-memory.js 출력
before:  32161792
stream:  76718080 // 76 MB
*/