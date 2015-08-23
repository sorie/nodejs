var fs = require('fs');

console.log('파일 읽기 프로세스 시작...');

//file System - readFileSync() 사용
var data = fs.readFileSync('files/user.json');
console.log('데이터:' + data);

console.log('파일 읽기 프로세스끝.');
