const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep);
console.log('path.delimiter:', path.delimiter);

/* 
path.sep: /                    // 경로의 구분자. Windows의 경우 \
path.delimiter: :              // 환경 변수의 구분자. Windows의 경우 ;
*/

console.log('----------------------------------');
console.log('path.dirname():', path.dirname(string));
console.log('path.extname():', path.extname(string));
console.log('path.basename():', path.basename(string));
console.log('path.basename - extame:', path.basename(string, path.extname(string)));

/* 
----------------------------------
path.dirname(): /home/dee/test/nodejs/ch3/modules    // 파일이 위치한 폴더 경로
path.extname(): .js                                  // 파일의 확장자
path.basename(): path.js                             // 파일의 이름(확장자 포함)을 표시
path.basename - extame: path                         // 두 번째 인수로 확장자를 넣으면 파일의 이름만 표시
*/

console.log('---------------------------------');
console.log('path.parse()', path.parse(string));
console.log('path.format():', path.format({
    dir: 'C\\users\\zerocho',
    name: 'path',
    ext: '.js',
}));
console.log('path.normalize():', path.normalize('C://users\\\\zerocho\\\path.js'));

/* 
---------------------------------
path.parse() {                                 // 파일 경로를 root, dir, vase, ext, name으로 분리
  root: '/',
  dir: '/home/dee/test/nodejs/ch3/modules',
  base: 'path.js',
  ext: '.js',
  name: 'path'
}
path.format(): C\users\zerocho/path.js         // path.parse()한 객체를 파일 경로로 합침
path.normalize(): C:/users\\zerocho\path.js    // 경로를 정규화함
*/

console.log('--------------------------------');
console.log('path.isAbsolute(/):', path.isAbsolute('/'));
console.log('path.isAbsolute(C:\\):', path.isAbsolute('C:\\'));
console.log('path.isAbsolute(./home):', path.isAbsolute('./home'));

/* 
--------------------------------
path.isAbsolute(C:\): true          // 파일 경로가 절대 경로이면 true 리턴
path.isAbsolute(C:\): false        
path.isAbsolute(./home): false
*/

console.log('---------------------------------');
console.log('path.relative():', path.relative('C:\\users\\zerocho\\path.js', 'C:\\'));
console.log('path.join():', path.join(__dirname, '..', '..', '/users', '.', '/zerocho'));
console.log('path.resolve():', path.resolve(__dirname, '..', 'users', '.', '/zerocho'));

/*
---------------------------------
path.relative(): ../C:\                           // 경로1에서 경로2로 가는 방법
path.join(): /home/dee/test/nodejs/users/zerocho  // 인수들을 하나의 경로로 합침. ..와 .도 알아서 처리
path.resolve(): /zerocho                          // path.join()과 비슷하나, /를 절대 경로의 루트 디렉터리로 처리
*/
