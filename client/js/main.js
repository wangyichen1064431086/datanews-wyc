const echarts = require('echarts');

/*
	module.exports  / requre() ---node
	export {} / import {} from () ---ES6
	疑问：关于他们的使用场景问题
*/
const bar1 = echarts.init(document.getElementById('bar1'));
//const bar1Option = require('./echartOptions/bar1Option.js');//使用这种办法必须加上前缀./，不然就逐级查找node_modules
import { bar1Option } from './echartOptions/bar1Option.js';//使用这种办法也必须加上前缀./
bar1.setOption(bar1Option);


const line1= echarts.init(document.getElementById('line1'));
import { line1Option } from './echartOptions/line1Option.js';
line1.setOption(line1Option);