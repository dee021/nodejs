// 기타 fs 메서드 : 파일 및 폴더 생성
const fs = require('fs').promises;
const constants = require('fs').constants;

fs.access('./folder', constants.F_OK | constants.W_OK | constants.R_OK)
/* 
fs.access(path, option, callback) : 폴더나 파일에 접근할 수 있는지 체크
- 파일/폴더 혹은 권한이 없으면 에러가 발생하며, 파일/폴더가 없을 때의 에러 코드는 ENOENT

option : constants를 통해 가져온 상수들 기입
- F_OK : 파일 존재 여부 체크
- R_OK : 읽기 권한 여부 체크
- W_OK : 쓰기 권한 여부 체크
*/
.then(() => {
    return Promise.reject('이미 폴더 있음');
})
.catch((err) => {
    if (err.code === 'ENOENT') {
        console.log('폴더 없음');
        return fs.mkdir('./folder');
        /* 
        fs.mkdir(path, callback) : 폴더를 만드는 메서드
        - 이미 존재하는 폴더면 error 발생
        */
    }
    return Promise.reject(err);
})
.then(() => {
    console.log('폴더 만들기 성공');
    return fs.open('./folder/file.js', 'w');
    // fs.open(path, option, callback) : (옵션에 따라 파일이 없다면 파일을 생성하여) 파일의 id를 가져오는 메서드
})
.then((fd) => {
    console.log('빈 파일 만들기 성공');
    return fs.rename('./folder/file.js', './folder/newfile.js');
    // fs.rename(oldPath, newPath, callback) : 파일의 이름을 바꾸는 메서드
})
.then(() => {
    console.log('이름 바꾸기 성공');
})
.catch((err) => {
    console.error(err);
});

/* 출력
$ node fsCreate
폴더 없음
폴더 만들기 성공
빈 파일 만들기 성공
이름 바꾸기 성공

$ node fsCreate
이미 폴더 있음
*/