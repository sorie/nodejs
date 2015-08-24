//사용자 정의 모듈 'modules/combineJS.js' 호출 
var combineJS = require('./modules/combineJS');

/**
	* combineJS 모듈 사용
	* 전달인자 1: 병합하고자 하는 JS 파일 리스트(배열)
	* 전달인자 2: 병합되어 생성된 파일 경로(문자열)
	* 전달인자 3: 병합할 파일을 압축할지 유무 설정(boolean)
	*/
//combineJS 모듈 사용
combineJS(['./readFile.js', './writerFile.js'], './jsCombine.js', true);