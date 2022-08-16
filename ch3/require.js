module.exports = 'find me';

require('./var');

console.log('require.cache');
console.log(require.cache);
console.log('require.main'); // node 실행 시 첫 모듈(실행 모듈)
console.log(require.main === module); // true
console.log(require.main.filename);