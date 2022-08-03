/*
const odd = '홀수입니다';
const even = '짝수입니다';


module.exports = {
    odd, 
    even,
};
*/

exports.odd = '홀수입니다';
exports.even = '짝수입니다';

console.log(module.exports === exports); // true
/*
module.exports와 exports는 같은 객체를 참조(exports는 module.exports를 참조)
module.exports : use to export a single class/variable/function from one module to another module
- 대입 값 제한 없음

exports : use to export multiple variables/functions from one module to another
- 반드시 속성명과 속성값 대입
- ex)
    exports = function() { console.log(odd); } (x)
    exports.printOdd = function() { console.log(odd); } (o)
*/