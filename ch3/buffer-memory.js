// 용량이 큰 파일을 모두 읽어 복사

const fs = require('fs');

console.log('before: ', process.memoryUsage().rss);
/* 
+) process.memoryUsage()
{
  rss: 43008000, 
  heapTotal: 7004160,
  heapUsed: 5071832,
  external: 936561,
  arrayBuffers: 10436
}

rss(Resident Set Size) 
: the amount of space occupied in the main memory device for the process
*/
const data1 = fs.readFileSync('./big.txt');
fs.writeFileSync('./big2.txt', data1);
console.log('buffer: ', process.memoryUsage().rss);

/* 출력
before:  32079872
buffer:  923328512
*/