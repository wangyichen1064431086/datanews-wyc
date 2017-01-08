import {opts} from '../controlOpts.js';

const line_inline8Option = {
	xAxis:{
		type:'category',
		position:'bottom',
		boundaryGap:false,
		axisLine:{
			onZero:true,
			show:true,
			lineStyle:{
				width:2,
				type:'solid'
			}
		},
		axisTick:{
			show:false
		},
		axisLabel:{
			show:false
		},
		data:['2011','2012','2013','2014']
	},
	yAxis:{
		type:'value',
		min:-20,
		max:120,
		axisLine:{
			show:false
		},
		axisTick:{
			show:false
		},
		axisLabel:{
			show:false
		},
		splitLine:{
			show:false
		}
	},
	series:[
		{
			type:'line',
			name:'投资金额',
			symbol:'circle',
			symbolSize:4,
			showAllSymbol:true,
			label:opts.serieslabel,
			hoverAnimation:opts.hoverAni,
			itemStyle:{//折线拐点标志的样式
				normal:opts.itemstyle6N,
				emphasis:opts.itemstyle6E
			},
			lineStyle:{
				normal:{
					color:'#9e2f50',
					width:1.5,
					type:'solid'
				}
			},
			areaStyle:{
				normal:{
					color:'rgba(158,47,80,0.25)'
				}
			},
			data:[44.6,8.5,48.8,25.3]
		}
	],
	tooltip:{
		show:opts.tooltipShow,
		trigger:'item',
		triggerOn:'mousemove',
		position:'top',
		formatter:'{b}年<br/>{a}:{c}亿美元'
	}
	
}

export { line_inline8Option };