const fs = require('fs');

const writeStream = fs.createWriteStream('./writeme2.txt');
writeStream.on('finish', () => {
    console.log('파일 쓰기 완료');
    console.log('----------------');
    fs.readFile('./writeme2.txt', (err, data) => {
        if (err) throw err;
        console.log(data.toString());
    });
});

writeStream.write('이 글을 씁니다.\n');
writeStream.write('한 번 더 씁니다.');
writeStream.end(); // 'finish' 이벤트

/* 출력
파일 쓰기 완료
----------------
이 글을 씁니다.
한 번 더 씁니다.
*/