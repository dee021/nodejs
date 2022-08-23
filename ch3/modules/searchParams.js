// 노드 방식의 url을 사용할 때 search 부분 사용
const { URL } = require('url');

const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');

/* 
URL 생성자로 만든 객체에는 searchParams 객체가 있음
searchParams 객체는 search 부분을 조작하는 메서드를 지원
*/


console.log('searchParams: ', myURL.searchParams);
/* 
searchParams:  URLSearchParams {
  'page' => '3',
  'limit' => '10',
  'category' => 'nodejs',
  'category' => 'javascript' }
*/

console.log('searchParams.getAll(): ', myURL.searchParams.getAll('category'));
console.log('searchParams.get(): ', myURL.searchParams.get('limit'));
console.log('searchParams.has(): ', myURL.searchParams.has('page'));
/* 
searchParams.getAll():  [ 'nodejs', 'javascript' ]  // 인자(키)에 해당하는 모든 값들을 가져옴
searchParams.get():  10                             // 인자(키)에 해당하는 첫 번째 값만 가져옴
searchParams.has():  true                           // 해당 키가 있는지 검사
*/

console.log('searchParams.keys(): ', myURL.searchParams.keys());
console.log('searchParams.values(): ', myURL.searchParams.values());
/* 
searchParams.keys():  URLSearchParams Iterator { 'page', 'limit', 'category', 'category' }  // searchParams의 모든 키를 iterator 객체로 가져옴
searchParams.values():  URLSearchParams Iterator { '3', '10', 'nodejs', 'javascript' }      // searchParams의 모든 값을 iterator 객체로 가져옴
*/


myURL.searchParams.append('filter', 'es3');
myURL.searchParams.append('filter', 'es5');
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.set('filter', 'es6');
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.delete('filter');
console.log(myURL.searchParams.getAll('filter'));

console.log('searchParams.toString(): ', myURL.searchParams.toString());
/* 
[ 'es3', 'es5' ]
[ 'es6' ]
[]
searchParams.toString():  page=3&limit=10&category=nodejs&category=javascript
*/