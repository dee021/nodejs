const fs = require('fs');
/* 
fs : 파일 시스템에 접근하는 모듈
- readFile(filePath, callbackFunc);
*/
fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});

/* 출력
<Buffer ec a0 80 eb a5 bc 20 ec 9d bd ec 96 b4 ec a3 bc ec 84 b8 ec 9a 94 2e>
저를 읽어주세요.
*/