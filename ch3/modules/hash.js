// 단방향 암호화
const crypto = require('crypto'); // 암호화를 위한 모듈

/* 
단방향 암호화(해시 함수) : 복호화할 수 없는 암호화 방식으로 보통 복호화할 필요가 없는 비밀번호 등에 사용됨
- 주어진 문자열을 고정 길이의 다른 문자열로 바꾸는 해시 기법을 주로 사용

해시 함수 사용
crypto.createHash(해시알고리즘).update(변환할문자열).digest(인코딩알고리즘)
*/

console.log('base64: ', crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex: ', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64: ', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));

/* 출력
base64:  dvfV6nyLRRt3NxKSlTHOkkEGgqW2HRtfu19Ou/psUXvwlebbXCboxIPmDYOFRIpqav2eUTBFuHaZri5x+usy1g==
hex:  76f7d5ea7c8b451b773712929531ce92410682a5b61d1b5fbb5f4ebbfa6c517bf095e6db5c26e8c483e60d8385448a6a6afd9e513045b87699ae2e71faeb32d6
base64:  cx49cjC8ctKtMzwJGBY853itZeb6qxzXGvuUJkbWTGn5VXAFbAwXGEOxU2Qksoj+aM2GWPhc1O7mmkyohXMsQw==
*/
