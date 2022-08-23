// 양방향 암호화
const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = 'abcdefghijklmnopqrstuvwxyz123456';
const iv = '1234567890123456';

// 암호화
const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update('암호화할 문장', 'utf8', 'base64'); // params : 문자열, 인코딩, 출력 인코딩
result += cipher.final('base64'); // param : 출력 인코딩
console.log('암호화: ', result);

// 복호화
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, 'base64', 'utf8'); // params : 문자열, 인코딩(= 암호화에 사용한 출력 인코딩), 출력 인코딩(= 암호화에 사용한 인코딩)
result2 += decipher.final('utf8');
console.log('복호화: ', result2);

/* 출력
암호화:  iiopeG2GsYlk6ccoBoFvEH2EBDMWv1kK9bNuDjYxiN0=
복호화:  암호화할 문장
*/

console.log(crypto.getCiphers()); // 사용 가능한 알고리즘 목록

/* cf)
https://nodejs.org/api/crypto.html : 노드 공식 문서
https://www.npmjs.com/package/crypto-js : 더 간단하게 암호화

*/