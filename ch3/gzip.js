const zlib = require('zlib'); // 파일 압축 모듈
const fs = require('fs');

const readStream = fs.createReadStream('./readme4.txt');
const zlibStream = zlib.createGzip(); // 스트림을 지원하는 메서드(=> 파이핑 가능)
const writeStream = fs.createWriteStream('./readme4.txt.gz');
readStream.pipe(zlibStream).pipe(writeStream); // readStream과 writeStream 중간에서 압축을 거침