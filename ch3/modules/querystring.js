// WHATWG 방식의 url을 사용할 때, search 부분 사용
const url = require('url');
const qs = require('querystring');

const parsedUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
const query = qs.parse(parsedUrl.query); // querystring.parse(쿼리) : url의 query 부분을 JS 객체로 분해
console.log('querystring.parse(): ', query);
console.log('querystring.stringify(): ', qs.stringify(query)); // querystring.stringify(객체) : 분해된 query 객체를 문자열로 조립

/* 
querystring.parse():  [Object: null prototype] {
  page: '3',
  limit: '10',
  category: [ 'nodejs', 'javascript' ]
}
querystring.stringify():  page=3&limit=10&category=nodejs&category=javascript
*/