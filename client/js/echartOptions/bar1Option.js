const bar1Option = {

	title:{/*标题组件*/
		show:true,//Bool|default:true|是否显示标题组件
		text:"ECharts入门示例",//String|default:""|主标题文本，支持\n换行
		subtext:'衣物销量/利润统计',
		left:100

		/*
		link:"",//String|default:""|主标题文本超链接,
		target:"blank",//default:"blank"|指定窗口打开超文本链接，可为"self"/"blank"
		textStyle:{
			color:"#000",//d:"#333"|主标题文字颜色
			fontStyle:'normal',//d:'normal'|主标题文字字体风格,可为'normal'/'italic'/'oblique'
			fontWeight:'normal',//d:'border'|主标题文字粗细，可为'normal'/'bold'/'bolder'/'lighter'/100/200/300/400..
			fontFamily:'黑体',// d:'sans-serif'|主标题文字字体系列
			fontSize:18//d:18
		},
		textAlign:'center',//d:根据标题位置决定|标题文本水平对齐，可为'left'/'center'/'right'
		textBaseline:'top',//d:根据标题位置决定|标题文本垂直对齐，支持'top'/'middle'/'bottom'
		subtext:'衣物销量/利润统计',//d:""/副标题文本，支持用\n换行
		sublink:"",//副标题超链接
		subtarget:"blank",//副标题打开窗口，为"self"/"blank"
		subtextStyle:{//同textStyle
			color:'#111',//d:'#aaa'
			fontStyle:'normal',
			fontWeight:'lighter',//d:'normal'
			fontFamily:'黑体',
			fontSize:14//d:12
		},
		padding:1,//d:5|标题内边距，单位px，形式可为 5(上下左右为5)/[5,10](上下5，左右10)/[5,10,5,10](上右下左)
		itemGap:1,//d:10|主副标题间距
		zlevel:0,//d:0|所有图形的zlevel值，用于Canvas分层,zlevel大的会放在小的Canvas上面
		z:2,//d:2|组件所有图形的z值。和zlevel基本相似，但优先级比zlevel低
		left:'center',//grid组件离容器左侧的距离
		top:'top',//grid组件离容器上侧的距离
		*/
	},
 
	legend: {/*图例组件*/
		data: ['销量','利润'],
		orient:'horizontal',//图例组件的布局朝向
		align:'auto',
		padding:5,
		itemGap:10,//图例每项之间的间隔
		itemWidth:30,//图例标记的图形宽度
		itemHeight:15,//图例标记的图形高度
		//formatter:'Legend 销量',//格式化图例文本
		selectedMode:true,//是否可以通过点击图例改变系列的显示状态
		inactiveColor:'gray',//图例关闭时的颜色
		
		selected:{//图例选中状态表
			'销量':true,
			'利润':true
		},
		
	
		/*textStyle:{//图例文字设置
			fontStyle:'normal',
			fontWeight:'normal',
			fontSize:12
		},
		tooltip:{//图例的tooltip配置，配置项同tooltip组件

		},
		data:[//单独一项系列的样式
			{
				name:'销量',//系列名称
				icon:'rect',//图形形状
				textStyle:{

				}
			}
			
		]*/
	},
	grid:{

	},
	tooltip:{},

	xAxis:{
		data:[
			"衬衫",
			"羊毛衫",
			"雪纺衫",
			"裤子",
			"高跟鞋",
			"袜子"
		]
	},

	yAxis:{},
	series:[
		{
			name:'销量',
			type:'bar',
			data:[5,20,36,10,10,20]
		},
		{
			name:'利润',
			type:'bar',
			data:[20,10,50,15,100,110]
		}
	]
};

//module.exports = bar1Option;
export {bar1Option};