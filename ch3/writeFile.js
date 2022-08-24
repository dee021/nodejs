const fs = require('fs').promises;

fs.writeFile('./writeme.txt', '글이 입력됩니다') // writeFile(filePath, text)
.then(() => {
    return fs.readFile('./writeme.txt');
})
.then((data) => {
    console.log(data.toString());
})
.catch((err) => {
    console.error(err);
});

/* 출력
글이 입력됩니다
*/