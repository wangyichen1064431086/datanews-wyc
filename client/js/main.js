import echarts from 'echarts';
import $ from 'jquery';

import { bar1Option } from './echartOptions/bar1Option.js';//使用这种办法也必须加上前缀./
import { line1Option } from './echartOptions/line1Option.js';
import { line2Option } from './echartOptions/line2Option.js';
import { bar2Option } from './echartOptions/bar2Option.js';
import { map1Option } from './echartOptions/map1Option.js';
import { line_inline1Option } from './echartOptions/line_inline1Option.js';
import { line_inline2Option } from './echartOptions/line_inline2Option.js';
import { line_inline3Option } from './echartOptions/line_inline3Option.js';
import { line_inline4Option } from './echartOptions/line_inline4Option.js';
import { line_inline5Option } from './echartOptions/line_inline5Option.js';
import { line_inline6Option } from './echartOptions/line_inline6Option.js';
import { line_inline7Option } from './echartOptions/line_inline7Option.js';
import { line_inline8Option } from './echartOptions/line_inline8Option.js';
import { line_inline9Option } from './echartOptions/line_inline9Option.js';
import { line_inline10Option } from './echartOptions/line_inline10Option.js';

const bar1 = echarts.init(document.getElementById('bar1'));
//const bar1Option = require('./echartOptions/bar1Option.js');//使用这种办法必须加上前缀./，不然就逐级查找node_modules
bar1.setOption(bar1Option);


const line1= echarts.init(document.getElementById('line1'));
line1.setOption(line1Option);


const line2 = echarts.init(document.getElementById('line2'));
line2.setOption(line2Option);


const bar2 = echarts.init(document.getElementById('bar2'));
bar2.setOption(bar2Option);


$.get('../mapSource/world.json', function (worldJson) {//这个jQuery的get方法只能针对obor.html目录设置路径
    echarts.registerMap('world', worldJson);
    const map1 = echarts.init(document.getElementById('map1'));
    map1.setOption(map1Option);
});


const line_inline1 = echarts.init(document.getElementById('inlineLine1'));
line_inline1.setOption(line_inline1Option);

const line_inline2 = echarts.init(document.getElementById('inlineLine2'));
line_inline2.setOption(line_inline2Option);

const line_inline3 = echarts.init(document.getElementById('inlineLine3'));
line_inline3.setOption(line_inline3Option);

const line_inline4 = echarts.init(document.getElementById('inlineLine4'));
line_inline4.setOption(line_inline4Option);

const line_inline5 = echarts.init(document.getElementById('inlineLine5'));
line_inline5.setOption(line_inline5Option);

const line_inline6 = echarts.init(document.getElementById('inlineLine6'));
line_inline6.setOption(line_inline6Option);

const line_inline7 = echarts.init(document.getElementById('inlineLine7'));
line_inline7.setOption(line_inline7Option);

const line_inline8 = echarts.init(document.getElementById('inlineLine8'));
line_inline8.setOption(line_inline8Option);

const line_inline9 = echarts.init(document.getElementById('inlineLine9'));
line_inline9.setOption(line_inline9Option);

const line_inline10 = echarts.init(document.getElementById('inlineLine10'));
line_inline10.setOption(line_inline10Option);

