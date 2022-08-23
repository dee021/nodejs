const crypto = require('crypto');

/* 
pbkdf2 : 기존 문자열에 salt를 첨가하여 해시 알고리즘을 반복하여 적용
*/

crypto.randomBytes(64, (err, buf) => { // randomBytes이므로 salt를 알아야 같은 해시값을 도출할 수 있음
    const salt = buf.toString('base64');
    console.log('salt: ', salt);
    crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => { // param : 비밀번호, salt, 반복 횟수, 출력 바이트, 해시 알고리즘
        console.log('password: ', key.toString('base64'));
    });
});

/* 출력
salt:  +XXRa4Fxn2Fkuze8a30jn3+5v6z3tUTSu0m58Wcuwb77PlrJqsQSsjprZnrbuxbkZf6Fg4p7b7WVADqHOKPTQg==
password:  OMoZtIn4lLe8SrkZitQ5iyoyfJUxlai1gWfSBgXcVafanq+7D44/ZBY/kWPTNcIGfAoBcL1MLeZskckIJjheoA==
*/