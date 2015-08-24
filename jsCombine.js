//Node.js - File System 모듈 호출 
// 참고 URL: http://nodejs.org/api/fs.html
var fs = require('fs');
console.log('파일읽기프로세스시작...');
fs.readFile('files/user.json', function (err, data) {
	var jsonobj = JSON.parse(data);
  console.log('data:' + jsonobj.nickname);
});
console.log('파일읽기프로세스끝.');
var fs = require('fs');
console.log('문서쓰기프로세스시작...');
var cssDoc = '#nodejs {margin:0;}';
var options = {encoding: 'utf8'};

fs.writeFile(
	'files/style.css',
	cssDoc,
	options,
	function() {
		console.log('files/style.css 파일 생성');
	}
);
//명령어를 실행하면 비동기적으로 코드를 수행한다. 
//마지막에 fs.writeFile() 메소드를 수행한 결과를 출력한다. 

console.log('문서쓰기프로세스끝...');

/*
1. 레퍼런스 fs.writeFile()메소드 설명
(https://nodejs.org/api/fs.html#fs_fs_writefile_filename_data_options_callback)
1)옵션,콜백도 전달할 수 있다. 옵션은 필수사항이 아니다. (선택 사항) 
옵션을 사용하려면 자바스크립트 객체 형태로 입력해야 한다. 
2)객체속성으로 인코딩, 모드, 플래그등을 설정할 수 있다. 
3)콜백은 fs.writeFile()메소드가 새파일을 생성하는 일을 끝낸 후에 수행하는 일이다. 
일이 다끝났을 때 어떤 일을 수행하고 싶다면 설정한다. 이또한 선택사항.... 

ex>
fs.writeFile('message.txt', 'Hello Node', function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});

4)위와 같이 옵션을 세번째 전달인자로 설정.
마지막 전달인자로 콜백함수를 추가.

*/


