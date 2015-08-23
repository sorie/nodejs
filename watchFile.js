var fs = require('fs');

//style.css 문서경로
var styleDoc = 'files/style.css';

//watchFile() - 파일변화를 지속적으로 관찰함.
fs.watchFile(styleDoc , function(cur,prv){
	//readFileSync() - 파일을 동기적으로 읽어옴.
	var doc = fs.readFileSync(styleDoc);
	console.log('변경된 문서내용: \n' + doc);
});
//watchFile() 메소드 사용하기.
/*
참고. 
https://nodejs.org/api/fs.html#fs_fs_watchfile_filename_options_listener

1. fs.watch()메소드를 전달되는 첫 번째 전달인자 값은 관찰할 파일 이름.
2. 옵션, 리스너등이 전달인자 값으로 전달되는데, 옵션은 생략 가능.
3. 리스너에는 관찰하는 파일이 변경된 것을 감지할 때마다 처리하는 일을 정의한 함수를 입력.

******
File System 모듈이 지원하는 watch()를 사용하면 디렉터리의 모든 파일을 지속적으로 관찰할 수 있다. 
(nodejs.org/api/fs.html#fs_filename_argument)
첫 번째 전달인자로 디렉터리이름을 입력해야 한다. 
그리고 리스너 함수의 filename 매개변수 값은 디렉터리 안의 각 파일을 가리킨다. 
*/

