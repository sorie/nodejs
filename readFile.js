//Node.js - File System 모듈 호출 
// 참고 URL: http://nodejs.org/api/fs.html
var fs = require('fs');
console.log('파일읽기프로세스시작...');
fs.readFile('files/user.json', function (err, data) {
	var jsonobj = JSON.parse(data);
  console.log('data:' + jsonobj.nickname);
});
console.log('파일읽기프로세스끝.');
