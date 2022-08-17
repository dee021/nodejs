const http = require('http');

http.createServer((req, res) => { // createServer() : 요청이 들어올 때마다 콜백 함수 실행
    // 응답 내용
    res.writeHead(200, {'Content-Type': 'text/html; charset = utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
})
.listen(8080, () => {// 서버 연결
    console.log('8080번 포트에서 서버 대기 중');
});