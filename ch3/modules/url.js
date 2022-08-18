const url = require('url');
/* url 모듈
URL 생성자에 주소를 넣어 객체로 가져와 부분별로 정리하거나,
url 객체를 문자열로 바꿔주는 기능
*/

const { URL } = url;
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('new URL(): ', myURL);  // WHATWG 형식으로 주소 분해
console.log('url.format(): ', url.format(myURL));

/* 
new URL():  URL {
  href: 'http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor',
  origin: 'http://www.gilbut.co.kr',
  protocol: 'http:',
  username: '',
  password: '',
  host: 'www.gilbut.co.kr',
  hostname: 'www.gilbut.co.kr',
  port: '',
  pathname: '/book/bookList.aspx',
  search: '?sercate1=001001000',
  searchParams: URLSearchParams { 'sercate1' => '001001000' },
  hash: '#anchor'
}
url.format():  http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor
*/

console.log('--------------------------------------');
const parsedUrl = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
// node 형식으로 주소 분해
console.log('url.parse(): ', parsedUrl);
console.log('url.format(): ', url.format(parsedUrl));

/* 
url.parse():  Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.gilbut.co.kr',
  port: null,
  hostname: 'www.gilbut.co.kr',
  hash: '#anchor',
  search: '?sercate1=001001000',
  query: 'sercate1=001001000',
  pathname: '/book/bookList.aspx',
  path: '/book/bookList.aspx?sercate1=001001000',
  href: 'http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor'
}
url.format():  http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor
*/