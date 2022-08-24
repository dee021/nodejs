const fs = require('fs');

const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16});
/* 
createReadStream(filePath[, option])
- highWaterMark : 버퍼 크기 지정(bytes). default = 64KB
*/
const data = [];

readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data: ', chunk, chunk.length);
});

readStream.on('end', () => {
    console.log('end: ', Buffer.concat(data).toString());
});

readStream.on('error', (err) => {
    console.error('error: ', err);
});

/* 출력
data:  <Buffer ec a0 80 eb 8a 94 20 ec a1 b0 ea b8 88 ec 94 a9> 16
data:  <Buffer 20 eb 82 98 eb 88 a0 ec 84 9c 20 ec a0 84 eb 8b> 16
data:  <Buffer ac eb 90 a9 eb 8b 88 eb 8b a4 2e 20 eb 82 98 eb> 16
data:  <Buffer 88 a0 ec a7 84 20 ec a1 b0 ea b0 81 ec 9d 84 20> 16
data:  <Buffer 63 68 75 6e 6b eb 9d bc ea b3 a0 20 eb b6 80 eb> 16
data:  <Buffer a6 85 eb 8b 88 eb 8b a4 2e> 9
end:  저는 조금씩 나눠서 전달됩니다. 나눠진 조각을 chunk라고 부릅니다.
*/