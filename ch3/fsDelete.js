// 기타 fs 메서드 : 파일 및 폴더 삭제
const fs = require('fs').promises;

fs.readdir('./folder') // 폴더 안의 내용물을 배열로 확인
.then((dir) => {
    console.log('폴더 내용 확인', dir);
    return fs.unlink('./folder/newfile.js'); // 파일이 존재하면 삭제, 없으면 에러
})
.then(() => {
    console.log('파일 삭제 성공');
    return fs.rmdir('./folder'); // 빈폴더 삭제, 빈폴더가 아니면 에러
})
.then(() => {
    console.log('폴더 삭제 성공');
})
.catch((err) => console.error(err));

/* 출력
폴더 내용 확인 [ 'newfile.js' ]
파일 삭제 성공
폴더 삭제 성공
*/