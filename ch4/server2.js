const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    try { // 비동기 방식으로 html 파일을 읽어 응답
        const data = await fs.readFile('./server2.html');
        res.writeHead(200, { 'Content-Type':'text/html; charset = utf-8' });
        res.end(data);
    } catch (err) { // 실패시 에러 표시
        console.error(err);
        res.writeHead(500, {'Content-Type': 'text/plain; charset = utf-8' });
        res.end(err.message);
    }
})
.listen(8081, () => {
    console.log('8081번 포트에서 서버 대기 중');
});