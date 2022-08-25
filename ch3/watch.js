// 기타 fs 메서드 : 파일/폴더의 변경 사항을 감시하는 메서드
const fs = require('fs');

fs.watch('./target.txt', (eventType, filename) => {
    console.log(eventType, filename);
});

/* 
watch.js를 실행하고 내용물 수정 시 change 이벤트 발생
                   파일명을 변경하거나 파일 삭제 시 rename 이벤트 발생
 - rename 이벤트가 발생하면 더 이상 watch가 수행되지 않음
*/