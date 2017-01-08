import {proRandom} from './proRandom.js';

const myRandom = proRandom();
console.log(myRandom);

const control = (function() {
	const interactive = myRandom<0.5 ? "open":"close";
	return {
		interactive
		//等于：interactive:interactive——ES7新增：如果指定属性值的变量名刚好是属性的键，那么你可以省略键。
	}
})();



export {control};