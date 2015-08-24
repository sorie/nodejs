/*! combineJS module @enne3939@gmail.com, 2015 */

// File System 내장 모듈 호출
var fs = require('fs');
/**
	* combine.JS 모듈 정의 및 외부로 출력
	* 모듈 내부에 전달받을 인자(배열, 문자열) 설정\
	*/

module.exports = function (jsSrc, exportJS) {
	var mergeCode = '';
	//배열 jsSrc를 개별적으로 접근 조작하기 위해
	//forEach 배열 메소드 사용.
	jsSrc.forEach(function(file, index) {
		//fs.readFileSync() 사용하여 파일 내용 읽기.
		mergeCode += fs.readFileSync(file);
	});
	//console.log(mergeCode);	
	//병합된 코드 mergeCode 내용을 파일 생성. 
	fs.writeFileSync(exportJS, mergeCode);
}

/**
	*minify 모듈 사용 방법
	*https://github.com/coderaiser/minify
	*jsSrc.forExch(function(file, index){
		minify(file, function(err, data) {
			console.log(data);
		});
	});
	--> 파일 압축된 결과가 연속해서 출력된다. 
	이어서 압축된 코드를 병합하는 코드와 벼압이 끝나면 새 문서를 생성하는 코드를 입력한다.
	jsSrc.forExch(function(file, index){
		minify(file, function(err, data) {
			mergeCode + data;
			if(index==jsSrc.length-1){writeFile();}
		});
	}); 
	function writeFile(){
		fs.wrieFileSync(exportJs, mergeCode);
	}
	**/