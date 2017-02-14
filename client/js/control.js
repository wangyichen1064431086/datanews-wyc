import {proRandom} from './proRandom.js';

let myRandom = proRandom();
console.log(myRandom);

const control = (function() {
	const interactive = myRandom<0.5 ? "open":"close";

	let randomForVideo = myRandom*9;
	let video = "";
	if(randomForVideo>=0&&randomForVideo<3){
		video = "atStart";
	} else if(randomForVideo>=3&&randomForVideo<6){
		video = "atEnd";
	} else {
		video = "no";
	}

	const testMode = 1;//实验1：测试交互
	//或为2：测试video位置



	return {
		interactive,
		video,
		testMode
		//等于：interactive:interactive——ES7新增：如果指定属性值的变量名刚好是属性的键，那么你可以省略键。
	}
})();



export {control};