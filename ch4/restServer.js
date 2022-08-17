const http = require('http');
const fs = require('fs').promises;

const users = {}; // 데이터 저장용

http.createServer(async (req, res) => {
    try {
        console.log(req.method, req.url);
        if (req.method === 'GET') {
            if (req.url === '/') {
                const data = await fs.readFile('./restFront.html');
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                return res.end(data); 
                /* return을 붙이지 않으면 함수가 종료되지 않으므로 return을 붙여 명시적으로 함수 종료 */
            } else if (req.url === '/about') {
                const data = await fs.readFile('./about.html');
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                return res.end(data);
            } else if (req.url === '/users') {
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                return res.end(JSON.stringify(users));
                /* JSON.stringify(value[, replacer[, space]])
                JS 값이나 객체를 JSON 문자열로 변환
                - 같은 객체의 문자열화에 있어서 속성의 순서에 의존하지 않음
                - undefined, 함수, symbol은 변환될 때 생략되거나 null로 변환됨
                - 심볼을 키로 가지는 속성들은 replacer 함수를 사용해도 무시됨
                - 열거 불가능한 속성들은 무시됨
                */
            }

            try { // '/', '/about', '/users'이 아니면
                const data = await fs.readFile(`.${req.url}`);
                return res.end(data);
            } catch (err) {
                // 404
            }

        } else if (req.method ==='POST') {
            if (req.url === '/user') {
                let body = '';
                req.on('data', (data) => { // 요청의 body를 stream 형식으로 받음
                    body += data; 
                });
                return req.on('end', () => {
                    console.log('POST 본문(Body):', body);
                    const { name } = JSON.parse(body);
                    const id = Date.now();
                    users[id] = name;
                    res.writeHead(201);
                    res.end('등록 성공');
                });
            }

        } else if (req.method === 'PUT') {
            /* string.startsWith( searchString[, length])
            문자열이 특정 문자열로 시작하는지 확인
            +) .endsWith(), .includes()
            */

            if (req.url.startsWith('/user/')) {
                const key = req.url.split('/')[2];
                let body = '';
                req.on('data', (data) => {
                    body += data;
                });
                return req.on('end', () => {
                    console.log('PUT 본문(Body):', body);
                    users[key] = JSON.parse(body).name;
                    return res.end(JSON.stringify(users));
                });
            }

        } else if (req.method === 'DELETE') {
            if (req.url.startsWith('/user/')) {
                const key = req.url.split('/')[2];
                delete users[key];
                return res.end(JSON.stringify(users));
            }
        }
        

        res.writeHead(404);
        return res.end('NOT FOUND');
    } catch (err) {
        console.error(err);
                res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
                res.end(err);
    }
})
.listen(8082, () => {
    console.log('8082번 포트에서 서버 대기 중');
});